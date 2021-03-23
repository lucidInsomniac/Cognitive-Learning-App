import React, { useState, useRef } from "react"; //useRef it stays constant between re renders
import Cow from "../CatImg/cow.jpg";
import Duck from "../CatImg/duck.jpg";
import Gallo from "../CatImg/gallo.jpg";
import Horse from "../CatImg/horse.jpg";
import Piggy from "../CatImg/piggy.jpg";
import Tree from "../CatImg/tree.jpg";
import Books from "../CatImg/books.jpg";
import House from "../CatImg/house.jpg";
import "./Categories1.css";

function Categories({ categoriesData }) {
  const [list, setList] = useState(categoriesData);
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
    const rigthPiecesOrder = list[0].items;
    const currentItem = dragItem.current;
    //if the coordinates of the current node are not the same as the current node is at the moment, fire the log
    if (e.target !== dragNode.current) {
      console.log("TARGET IS NOT THE SAME!");
      //this line restricts the amount of cards in the first column(index 0) to only 5
      //and will allow cards to be moved to the second column (index 1)
      if (rigthPiecesOrder.length >= 5 && currentItem.grpI === 1) {
        return;
      }
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
    const rigthPiecesOrder = list[0].items;
    for (let i = 0; i < rigthPiecesOrder.length; i++) {
      if (rigthPiecesOrder.includes("6") && rigthPiecesOrder.includes("9")) {
        console.log("You did it!");
      } else {
        console.log("Oops! Try again!");
      }
    }
  };

  const handleIsSolvedClick = () => {
    isSolved();
  };

  const handleTryAgainClick = () => {
    const shuffledPieces = [...categoriesData[1].items].sort(
      () => 0.5 - Math.random()
    );
    setList([
      categoriesData[0],
      { ...categoriesData[1], items: shuffledPieces },
    ]);
  };

  return (
    <div className="categories-drag-n-drop">
      {/* here we iterate through groups*/}
      {list.map((grp, grpI) => (
        <div
          key={grp.title}
          className="categories-dnd-group"
          onDragEnter={
            dragging && !grp.items.length
              ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
              : null
          }
        >
          <div className="group-title">{grp.title}</div>
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
              className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
            >
              {item === "1" && (
                <img
                  src={Gallo}
                  alt="colorful rooster"
                  className="category-card"
                />
              )}
              {item === "2" && (
                <img src={Cow} alt="vector cow" className="category-card" />
              )}
              {item === "3" && (
                <img
                  src={Duck}
                  alt="walking duck"
                  className="category-card  duck-img"
                />
              )}
              {item === "6" && (
                <img src={Piggy} alt="tall horse" className="category-card" />
              )}

              {item === "7" && (
                <img src={Tree} alt="tall horse" className="category-card" />
              )}
              {item === "8" && (
                <img src={Books} alt="tall horse" className="category-card" />
              )}
              {item === "9" && (
                <img src={Horse} alt="tall horse" className="category-card" />
              )}
              {item === "10" && (
                <img src={House} alt="tall horse" className="category-card" />
              )}
            </div>
          ))}
        </div>
      ))}
      <div className="buttons">
        <button onClick={() => handleTryAgainClick()}>Try Again</button>
        <button onClick={() => handleIsSolvedClick()}>Done</button>
      </div>
    </div>
  );
}

export default Categories;
