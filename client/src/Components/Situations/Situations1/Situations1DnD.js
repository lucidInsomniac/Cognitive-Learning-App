import React, { useState, useRef } from "react"; //useRef it stays constant between re renders
import HawaiiOne from "../SituationsImg/hawaii-1.jpg";
import HawaiiTwo from "../SituationsImg/hawaii-2.jpg";
import VeggieOne from "../SituationsImg/veggies-1.jpg";
import VeggieTwo from "../SituationsImg/veggies-2.jpg";
import ShrimpOne from "../SituationsImg/shrimp-1.jpg";
import ShrimpTwo from "../SituationsImg/shrimp-2.jpg";
import BlackOlivesOne from "../SituationsImg/olives-1.jpg";
import BlackOlivesTwo from "../SituationsImg/olives-2.jpg";
import "./Situations1.css";

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

  const isSolved = () => {
    const firstHalfPizzaArray = list[0].items;
    const secondHalfPizzaArray = list[1].items;

    let match = true;
    const matchingIndexes = [];

    for (let i = 0; i < firstHalfPizzaArray.length; i++) {
      if (firstHalfPizzaArray[i][0] !== secondHalfPizzaArray[i][0]) {
        //line 106 removes annoyin lint warning that does not affect code
        // eslint-disable-next-line
        match = false;
      } else {
        matchingIndexes.push(i);
      }
    }
    console.log(`You've got ${matchingIndexes.length} out of 4 correct!`);
    if (matchingIndexes.length > 0) {
      return {
        completed: true,
        gameScore: matchingIndexes.length,
      };
    }
    return {
      completed: false,
      gameScore: matchingIndexes.length,
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
          <button
            id="pizza"
            onClick={() => handleIsSolvedClick()}
            className="lg-2 col background-warning"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
