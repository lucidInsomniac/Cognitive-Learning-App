import React from 'react'
import ChildrenParade from './ChildrenParade.png'
import './PatternsView.css'

export default function PatternsUnderConstruction () {

    return (

        <div className="PatternsUnderConstruction">

            <h2 className="patterns-404">
                Rain, rain, go away
                Come again another day
                All the family wants to play
                Rain, rain go away . . . 
                Come back another day when the rain has gone away
            </h2>

            <div className="patterns-404-container">
                <img 
                    src={ChildrenParade} 
                    alt="Children Parade in rainboots and umbrella" 
                    className="children-parade"
                />    
            </div>

           
        
        </div>
    ) 

}