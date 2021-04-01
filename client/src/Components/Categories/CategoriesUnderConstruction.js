import React from 'react'
import Pirates from './Pirates.jpg'
import './CategoriesView.css'

export default function CategoriesUnderConstruction () {

    return (

        <div className="CategoriesUnderConstruction">

            <h2 className="categories-404">
               
            </h2>

            <div className="categories-404-container">
                <img 
                    src={Pirates} 
                    alt="Pirate flag with crossbones" 
                    className="pirates"
                />    
            </div>

           
        
        </div>
    ) 

}