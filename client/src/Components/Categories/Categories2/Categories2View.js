import React from "react";
import Categories2Dnd from "./Categories2Dnd.js";
const categoriesData = [
  {
    title: "Transportation",
    items: ["1", "2", "3"],
  },

  {
    title: "Let's play!",
    items: ["6", "7", "8", "9", "10"],
  },
];

export default function Categories2View() {
  return (
    <div className="Categories2View">
      <header>Categories Level 2
        <Categories2Dnd categoriesData={categoriesData} />
      </header>
    </div>
  );
}
