import React from 'react'
import './TryAgain.css'

export default function TryAgain (props) {

    return (props.trigger) ? (
        <div className="TryAgain">
            <div className="popup-inner">
                <h2>Almost there! You are so close Daisie! Give it another try :3</h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>You can do it Daisie! ^_^</button>
                { props.children }
            </div>
        </div>
    ) : "";
};