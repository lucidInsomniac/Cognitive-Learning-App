import React from 'react'
import './Solved.css'

export default function Solved (props) {
    console.log("check props", props.games[0].game_score)


    return (props.trigger) ? (
        <div className="Solved">
            <div className="popup-inner">
                <h2>Oh Wow! You Solved {props.games[0].game_score} out for 4! </h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>You're Getting Closer! :D</button>
                { props.children }
            </div>
        </div>
    ) : "";
};