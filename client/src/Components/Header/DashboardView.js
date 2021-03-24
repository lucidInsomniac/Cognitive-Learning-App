import React from 'react'
import './DashboardView.css'
import Banner from './HeaderImg/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam } from '@fortawesome/free-solid-svg-icons'


export default function DashboardView () {

    return (

        <div className="DashboardView">
            <div className="icon-container">
                <FontAwesomeIcon icon={faUserAstronaut} size="3x" className="avatar"/>
            </div>
               <h1>Hi Daisie, <FontAwesomeIcon icon={faGrinBeam} className="welcome"/> Welcome Back!</h1>
            <diiv className="banner-container">
                <img src={Banner} alt="child draws rocket" id="banner" classname="banner"/>
            </diiv>
        </div>

    )
}