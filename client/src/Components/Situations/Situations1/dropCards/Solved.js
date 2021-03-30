import React from 'react'
import './Solved.css'

export default function Solved (props) {

    return (props.trigger) ? (
        <div className="Solved">
            <div className="popup-inner">
                <h2>Oh Wow! You Solved X out for 4! </h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>You're Getting Closer! :D</button>
                { props.children }
            </div>
        </div>
    ) : "";
};