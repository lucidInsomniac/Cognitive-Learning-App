import React from 'react'
import MosaicsHint from './MosaicsHint'
import './MainMosaicsView.css'
import UFOS from './saucerAliens.jpg'



export default function MainMosaicsView () {

    return (

        <div className="MainMosaicsView">
            <div className="mosaics-header-container">
                <h1 className="mosaics-h1">This is the Main Mosaics Page</h1> 
            </div>

            <div className="mosaics-img">
                <img src={UFOS} alt="3 aliens in 3 flying saucers"  className="ufos" />
            </div>

            <div className="mosaics-hint-container-main">
                <MosaicsHint className="main-mosaics-hint"/>
            </div>

        </div>
    ) 
}