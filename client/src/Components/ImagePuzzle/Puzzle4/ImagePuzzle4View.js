import React from 'react'
import "./ImagePuzzle4.css";
import DragNDrop4 from "./DragNDrop4";

const data = [
  {
    title: "Group 1",
    items: ["1", "2", "3", "4", "5"],
  },

  {
    title: "Group 2",
    items: [],
  },
];

function ImagePuzzle4View() {

    return (

        <div className="ImagePuzzle4View">

            <header className="ImagePuzzleView1-header">
              <DragNDrop4 data={data} />
            </header>

        </div>

    );

};

export default ImagePuzzle4View;
