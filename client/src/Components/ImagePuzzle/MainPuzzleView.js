import React, { Children } from 'react'
import PuzzleHint from './PuzzleHint'
import './MainPuzzleView.css'
import LittleGirl from '../PageImages/LittleGirl.png'
import SmileyGirl from '../PageImages/SmileyGirl.png'


export default function MainPuzzleView () {

    return (

        <div className="MainPuzzleView">

            <div className="puzz-header-container">
                <h1>This is the Main Puzzle Page</h1> 
            </div>

            <div className="puzzle-hint-containter-main">
                <PuzzleHint className="main-puzzle-hint" id="main-puzzle-hint"/>
            </div>

            <div className="puzzle-img">
                <img src={LittleGirl} alt="Little Girl Pointing Up" className="little-girl" />
            </div>

            <div className="puzzle-img2">
                <img src={SmileyGirl} alt="Little Girl Smiling" className="smiley-girl" />
            </div>


        </div>
    ) 
}