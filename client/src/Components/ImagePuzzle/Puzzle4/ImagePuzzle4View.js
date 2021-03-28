import "./ImagePuzzle4.css";
import DragNDrop4 from "./DragNDrop4";

const data = [
  {
    title: "Group 1",
    items: ["2", "1", "3", "5", "4"], // here we shuffle the puzzle from the start of the game
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
}

export default ImagePuzzle4View;
