import React from 'react'
import PewPew from './PewPew.png'
import './MosaicsView.css'

export default function MosaicsUnderConstruction () {

    return (

        <div className="MosaicsUnderConstruction">

            <h2 className="mosaics-404">
                Oh No Captain! The ships gone off course! We'll need a wee bit of time to fix the ship Captain!
            </h2>

            <div className="mosaics-404-container">
                <img 
                    src={PewPew} 
                    alt="rocket navigating through asteroids" 
                    className="rocket"
                />    
            </div>
        
        </div>
    ) 

}