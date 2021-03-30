import React from 'react'
import './Solved.css'

export default function Solved (props) {

    return (props.trigger) ? (
        <div className="Solved">
            <div className="popup-inner">
                <h2>YAY! You Solved it! That was amaaaaaaazing!</h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Keep it up Daisie! :D</button>
                { props.children }
            </div>
        </div>
    ) : "";
};