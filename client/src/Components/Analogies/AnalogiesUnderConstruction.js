import React from 'react'
import Kitties from './Kitties.jpg'
import './AnalogiesView.css'

export default function AnalogiesUnderConstruction () {

    return (

        <div className="AnalogiesUnderConstruction">

            <h2 className="Analogies-404">
               
            </h2>

            <div className="patterns-404-container">
                <img 
                    src={Kitties} 
                    alt="Kitties working in construction" 
                    className="kitties"
                />    
            </div>

           
        
        </div>
    ) 

}