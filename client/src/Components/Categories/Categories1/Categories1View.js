import React from 'react'
import Categories1DnD from './Categories1DnD'


const categoriesData = [
  {
    title: "Farm Animals",
    items: ["1", "2", "3"],
  },

  {
    title: "Let's play!",
    items: ["6", "7", "8", "9", "10"],
  },
];

function Categories1View() {

  return (

      <div className="Categories1View">

          <header className="Categories1View-header">
            <h1 className="categories1-header">Categories Level 1</h1>
            <Categories1DnD categoriesData={categoriesData} />
          </header>

      </div>

  );

}

export default Categories1View;