import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

export default function Profile () {

    return ( 

        <div className="Profile">
            <header>Daisie the Amazing's Page</header>

            <div className="avatar-container">
                <div className="avatar-item">
                    <FontAwesomeIcon icon={faUserAstronaut} size="7x" />
                </div>
            </div>
        </div>
    )
}