import React from 'react'
import FloatingRobot from './FloatingRobot.png'
import ConfusedRabbit from './ConfusedRabbit.png'
import './ImagePuzzleView.css'

export default function PuzzleUnderConstruction () {

    return (

        <div className="PuzzleUnderConstruction">

            <h2 className="puzzle-404">
                Oopsies! Sorry about that! we're still under construction. Come back real soon!
            </h2>

            <div className="puzzle-404-container">
                <img 
                    src={FloatingRobot} 
                    alt="floating robot with balloons" 
                    className="floating-robot"
                />    
            </div>

            <div className="puzzle-404-container2">
                <img    
                    src={ConfusedRabbit}
                    alt="confused rabbit out of magic hat"
                    className="confused-rabbit"
                />
            </div>
        
        </div>
    ) 

}