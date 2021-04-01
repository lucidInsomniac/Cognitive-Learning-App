import React from 'react'
import SleepingDino from './SleepingDino.png'
import './SituationsView.css'

export default function SituationsUnderConstruction () {

    return (

        <div className="SituationsUnderConstruction">

            <h2 className="situations-404">
                SSSSSsshhhhhhh! Don't wake up the Sleeping Dino...
                They'll wake up when this part is finished, don't worry :D
            </h2>

            <div className="situations-404-container">
                <img 
                    src={SleepingDino} 
                    alt="Sleeping Dino" 
                    className="sleeping-dino"
                />    
            </div>

           
        
        </div>
    ) 

}