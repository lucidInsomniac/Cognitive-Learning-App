import React from 'react'
import CategoriesHint from './CategoriesHint'
import ToyTrain from '../PageImages/ToyTrain.png'
import goose from '../PageImages/goose.png'
import './MainCategoriesView.css'



export default function MainCategoriesView () {

    return (

        <div className="MainCategoriesView ">
            <div className="categories-header-container">
                <h1>This is the Main Categories Page</h1> 
            </div>

            <div className="categories-hint-container-main">
                <CategoriesHint className="main-categories-hint"/>
            </div>

            <div className="categories-img">
                <img src={ToyTrain} alt="Toy Train" className="toy-train" />
            </div>

            <div className="categories-img">
                <img src={goose} alt="goose" className="goose" />
            </div>

        </div>
        
    ) 

}