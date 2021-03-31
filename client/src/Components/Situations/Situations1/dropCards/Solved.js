import React, { useState, useEffect } from 'react'
import './Solved.css'

export default function Solved (props) {
    // console.log("check props", props.currentScore)

    // eslint-disable-next-line
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("Name") || ""
  );

  useEffect(() => {
    console.log(localStorage.getItem("valueInPlayerName"));
    localStorage.setItem("Name", playerName);
  }, [playerName]);


    return (props.trigger) ? (
        <div className="Solved">
            <div className="popup-inner">
                <h2>Oh Wow {playerName}! You Solved {props.currentScore} out for 4! </h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>You're Getting Closer {playerName}! :D</button>
                { props.children }
            </div>
        </div>
    ) : "";
};