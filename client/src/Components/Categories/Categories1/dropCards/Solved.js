import React, { useState, useEffect } from 'react'
import './Solved.css'

export default function Solved (props) {

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
                <h2>YAY! You Solved it {playerName}! That was amaaaaaaazing!</h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Keep it up {playerName}! :D</button>
                { props.children }
            </div>
        </div>
    ) : "";
};