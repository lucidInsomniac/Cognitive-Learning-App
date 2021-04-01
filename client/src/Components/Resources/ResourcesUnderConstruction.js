import React from 'react'
import NotFound from './404-error.png'
import './ResourcesView.css'

export default function ResourcesUnderConstruction () {

    return (

        <div className="ResourcesUnderConstruction">

            <div className="resources-404-container">
                <img 
                    src={NotFound} 
                    alt="404" 
                    className="not-found"
                />    
            </div>

        
        </div>
    ) 

}