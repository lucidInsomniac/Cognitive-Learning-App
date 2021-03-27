import React, { useState, useRef } from "react"; //useRef it stays constant between re renders
import Piece1 from "../PuzzleImg/puzzle-1.png";
import Piece2 from "../PuzzleImg/puzzle-2.png";
import Piece3 from "../PuzzleImg/puzzle-3.png";
import Piece4 from "../PuzzleImg/puzzle-4.png";
import Piece5 from "../PuzzleImg/puzzle-5.png";
import Cactus from "../PuzzleImg/the-cactus.png";


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


function DragNDrop1({ data }) {

  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
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
    const currentItem = dragItem.current;
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
    const startPiecesArray = ["1", "2", "3", "4", "5"]; //original array to be compared to
    const rightPiecesOrder = list[1].items; //it starts as an empty array and when the puzzle is done we have to compare it to the original array

    console.log(startPiecesArray, rightPiecesOrder);

    for (let i = 0; i < startPiecesArray.length; i++) {
      if (startPiecesArray[i] === rightPiecesOrder[i]) {
        //if both arrays have the same elements
        console.log("You did it!");
        return true;
      } else {
        console.log("Try again");
        return false;
      }
    }
  };


  const handleIsSolvedClick = () => {
    const gameName = "Puzzle 4";
    if (isSolved()) {
      saveScore({
        game_name: gameName,
        game_lvl: 4,
        game_images: null,
        completed: 1,
        //1 point for each puzzle
        //to allow game_score to add properly 
        //on progress table
        game_score:1
      });
    }
  };


  const handleTryAgainClick = () => {
    const shuffledPieces = [...data[0].items].sort(() => 0.5 - Math.random());
    setList([{ ...data[0], items: shuffledPieces }, data[1]]);
  };


  return (

      <div className="img-puzzle-drag-n-drop">

          {/* here we iterate through groups*/}
          {list.map((grp, grpI) => (

              <div
                key={grp.title}
                className="img-puzzle-dnd-group"
                onDragEnter={
                  dragging && !grp.items.length
                    ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                    : null
                }
              >
                  <div className="img-puzzle-group-title">{grp.title}</div>

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
                          dragging ? getStyles({ grpI, itemI }) : "img-puzzle-dnd-item"
                        }
                      >
                          {item === "1" && (
                            <img
                              src={Piece1}
                              alt="piece 1 of a puzzle"
                              className="img-puzzle-piece"
                            />
                          )}
                          {item === "2" && (
                            <img
                              src={Piece2}
                              alt="piece 2 of a puzzle"
                              className="img-puzzle-piece"
                            />
                          )}
                          {item === "3" && (
                            <img
                              src={Piece3}
                              alt="piece 3 of a puzzle"
                              className="img-puzzle-piece"
                            />
                          )}
                          {item === "4" && (
                            <img
                              src={Piece4}
                              alt="piece 4 of a puzzle"
                              className="img-puzzle-piece"
                            />
                          )}
                          {item === "5" && (
                            <img
                              src={Piece5}
                              alt="piece 5 of a puzzle"
                              className="img-puzzle-piece"
                            />
                          )}
                      </div>
                  ))}
              </div>
          ))}

          <div className="cactus-img">
             <img src={Cactus} alt="cactus illustration" className="whole-cactus" />
          </div>

          <div className="puzzle-buttons">

              <button
                id="puzzle-button"
                onClick={() => handleTryAgainClick()}
                className="lg-2 col background-warning"
              >
                Try Again
              </button>

              <button
                id="puzzle-button"
                onClick={() => handleIsSolvedClick()}
                className="lg-2 col background-warning"
              >
                Done
              </button>

          </div>

      </div>
    
  );

}

export default DragNDrop1;
