import React from 'react'
import SituationsHint from './SituationsHint'
import SillyBear from '../PageImages/SillyBear.png'
import Donut from '../PageImages/Donut.png'
import './MainSituationsView.css'

export default function MainSituationsView () {

    return (

        <div className="MainSituationsView">
            <div className="situations-header-container">
                <h1>This is the Main Situations Page</h1> 
            </div>

            <div className="situations-hint-container-main">
                <SituationsHint className="main-situations-hint" />
            </div>

            <div className="situations-img">
                <img src={SillyBear} alt="Silly Bear thing smiling" className="silly-bear" />
            </div>

            <div className="situations2-img">
                <img src={Donut} alt="Giant Frosted Sprinkled Donut" className="donut" />
            </div>
           
        </div>
    ) 
}