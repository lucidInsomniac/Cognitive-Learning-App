import React from 'react'
import AnalogiesHint from './AnalogiesHint'
import './MainAnalogiesView.css'
import Rawr from './Rawr.png'
import Snail from './Snail.png'


export default function MainPuzzleView () {

    return (

        <div className="MainAnalogiesView">

            <div className="analogies-header-container">
                <h1>This is the Main Puzzle Page</h1> 
            </div>

            <div className="analogies-hint-containter-main">
                <AnalogiesHint className="main-analogies-hint" id="main-analogies-hint"/>
            </div>

            <div className="analogies-img">
                <img src={Rawr} alt="Dino with raised eyebrow" className="funny-dino" />
            </div>

            <div className="analogies-img2">
                <img src={Snail} alt="Orange Shelled Snail" className="snail" />
            </div>


        </div>
    ) 
}