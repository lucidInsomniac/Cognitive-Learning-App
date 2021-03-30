import React, { useState, useEffect, useRef } from "react"; //useRef it stays constant between re renders
import HawaiiOne from "../SituationsImg/hawaii-1.jpg";
import HawaiiTwo from "../SituationsImg/hawaii-2.jpg";
import VeggieOne from "../SituationsImg/veggies-1.jpg";
import VeggieTwo from "../SituationsImg/veggies-2.jpg";
import ShrimpOne from "../SituationsImg/shrimp-1.jpg";
import ShrimpTwo from "../SituationsImg/shrimp-2.jpg";
import BlackOlivesOne from "../SituationsImg/olives-1.jpg";
import BlackOlivesTwo from "../SituationsImg/olives-2.jpg";
import "./Situations1.css";
import Solved from './dropCards/Solved'
import TryAgain from './dropCards/TryAgain'
import SituationsHint from '../SituationsHint'



const saveScore = (gameScore) => {
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameScore),
  };
  fetch("http://localhost:3000/server", options)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("score saved");
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

export default function Situations1DnD({ situationsData }) {
  const [list, setList] = useState(situationsData);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef(); //useRef() stays constant between re renders
  const dragNode = useRef();

  //initial state for score
  const [currentScore, setCurrentScore] = useState(0);

  //initial state for popup button
  const [buttonSolvedPopup, setButtonSolvedPopup] = useState(false);
  //initial state for popup button
  const [buttonRetryPopup, setButtonRetryPopup] = useState(false);

   //state for games data to be fetched
   const [games, setGames] = useState([]);

   //put useEffect to pull data for player here
   useEffect(() => {
    //this connects to the server.js routes
    fetch("/server")
    //our promise for fetch with a request
    .then(response => response.json())
    //this is the response returned with actual data
    .then(games => {
        console.log(games);
        //upon success, update games
        setGames(games);
        //check games variable has value in console log
        console.log( 'Dashboard Avatar', games)
    })
    //catch any errors
    .catch(err => {
        //upon failure, show error message
        console.log("ERROR:", err.message);
    });
    //gets saved into an empty state as new array
}, []); 



  //check array values for game to extract game_score
  // console.log("games array check", games[0].game_score)


  const handleDragStart = (e, params) => {
    console.log("drag starting...", params);
    dragItem.current = params; //dragItem's coordinate
    dragNode.current = e.target; //the node we are currently playing with
    dragNode.current.addEventListener("dragend", handleDragEnd); //The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
    // when we start dragging it will keep the original style (white), otherwise it will drag black-ish
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("Entering drag ...", params);
    // const firstHalfPizzaArray = list[0].items;

    const currentItem = dragItem.current;
    console.log(currentItem, dragNode);

    if (currentItem.grpI !== params.grpI) {
      return;
    }

    //if the coordinates of the current node are not the same as the current node is at the moment, fire the log
    if (e.target !== dragNode.current) {
      console.log("TARGET IS NOT THE SAME!");

      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList)); // here we are making a clone of oldList (that is an object) so we can manipulated
        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
    // when we start dragging it will keep the original style (white), otherwise it will drag black-ish
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    console.log("Ending drag...");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd); //The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.grpI === params.grpI &&
      currentItem.itemI === params.itemI
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };
  
  const matchingIndexes = [];
  const isSolved = () => {
    const firstHalfPizzaArray = list[0].items;
    const secondHalfPizzaArray = list[1].items;
    // eslint-disable-next-line
    let match = true;
    

    for (let i = 0; i < firstHalfPizzaArray.length; i++) {
      if (firstHalfPizzaArray[i][0] !== secondHalfPizzaArray[i][0]) {
        //This removes the eslint warning in the yarn start for client
        //and allows for yarn build to execute without errors
        // eslint-disable-next-line
        match = false;
      } else {
        matchingIndexes.push(i);
      }
    } /*************************************************Need to figure how to grab score from here and pass down as props*******************************/
    console.log(`You've got ${matchingIndexes.length} out of 4 correct!`);
    if (matchingIndexes.length > 0) {
      return {
        completed: true,
        gameScore: matchingIndexes.length,
        buttonStatus: setButtonSolvedPopup(true),
        currentScore: setCurrentScore(matchingIndexes.length)
      };
    } 
      return {
        completed: false,
        gameScore: matchingIndexes.length,
        buttonStatus: setButtonRetryPopup(true),
        currentScore: setCurrentScore(matchingIndexes.length)
      };
  };
  
  const handleIsSolvedClick = () => {
    const gameName = "Situations 4";
    const gameResult = isSolved(); // assigning the result of the return of the function to a variable(an object containing a boolean and a number)
    if (gameResult.completed) {
      //if gameResult is completed (true)
      saveScore({
        game_name: gameName,
        game_lvl: 1,
        game_images: null,
        completed: 1,
        game_score: gameResult.gameScore, //gameResult.gameScore is a number
        
      });
      console.log("gameScore to extract", gameResult.gameScore)
    }
    
  };

  

  const handleTryAgainClick = () => {
    const shuffledPieces = [...situationsData[1].items].sort(
      () => 0.5 - Math.random()
    );
    setList([
      situationsData[0],
      { ...situationsData[1], items: shuffledPieces },
    ]);
  };

  return (
    <div className="Situations1DnD">
        <div className="situations-drag-n-drop">
            {/* here we iterate through groups*/}
            {list.map((grp, grpI) => (
            <div
              key={grp.title}
              className="situations-dnd-group"
              onDragEnter={
                dragging && !grp.items.length
                  ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                  : null
              }
            >
                <div className="situations-group-title">{grp.title}</div>
                
                  {/* here we iterate through items*/}
                  {grp.items.map((item, itemI) => (

                  <div
                    draggable
                    onDragStart={(e) => {
                      handleDragStart(e, { grpI, itemI }); //here we are passing the coordinates by index to a specific item
                    }}
                    onDragEnter={
                      dragging ? (e) => handleDragEnter(e, { grpI, itemI }) : null
                    }
                    key={item}
                    className={
                      dragging ? getStyles({ grpI, itemI }) : "situations-dnd-item"
                    }
                  >
                      {item === "1a" && (
                        <img
                          src={HawaiiOne}
                          alt="hawaiian pizza"
                          className=" group-one category-card"
                        />
                      )}
                      {item === "2a" && (
                        <img
                          src={VeggieOne}
                          alt="veggie pizza"
                          className=" group-one category-card"
                        />
                      )}
                      {item === "3a" && (
                        <img
                          src={ShrimpOne}
                          alt="shrimp pizza"
                          className=" group-one category-card"
                        />
                      )}
                      {item === "4a" && (
                        <img
                          src={BlackOlivesOne}
                          alt="black olives pizza"
                          className="group-one category-card"
                        />
                      )}
                      {item === "1b" && (
                        <img
                          src={HawaiiTwo}
                          alt="hawaiian pizza"
                          className="group-two category-card"
                        />
                      )}
                      {item === "2b" && (
                        <img
                          src={VeggieTwo}
                          alt="veggie pizza"
                          className="group-two category-card"
                        />
                      )}
                      {item === "3b" && (
                        <img
                          src={ShrimpTwo}
                          alt="shrimp pizza"
                          className="group-two category-card"
                        />
                      )}
                      {item === "4b" && (
                        <img
                          src={BlackOlivesTwo}
                          alt="black olives pizza"
                          className="group-two category-card"
                        />
                      )}
                  </div>
                ))}
            </div>
          ))}

            <div className="pizza-buttons">
                <button
                  id="pizza"
                  onClick={() => handleTryAgainClick()}
                  className="lg-2 col background-warning"
                >
                  Try Again
                </button>

                <SituationsHint className="situations-hint" id="situations-hint" />

                <button
                  id="pizza"
                  onClick={() => handleIsSolvedClick()}
                  className="lg-2 col background-warning"
                >
                  Done
                </button>

              {/* This triggers the popup,
              you can check by using <Solved trigger={true}/>
              Need variable to trigger it to true */}
              <Solved trigger={buttonSolvedPopup} games={games} currentScore={currentScore} matchingIndexes={matchingIndexes.length} setTrigger={setButtonSolvedPopup} /> 

              <TryAgain trigger={buttonRetryPopup} matchingIndexes={matchingIndexes.length} setTrigger={setButtonRetryPopup} />

            </div>
        </div>
    </div>
  );
}
