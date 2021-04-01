import React, { useState, useEffect } from 'react'
import './TryAgain.css'

export default function TryAgain (props) {

  // eslint-disable-next-line
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("Name") || ""
  );

  useEffect(() => {
    console.log(localStorage.getItem("valueInPlayerName"));
    localStorage.setItem("Name", playerName);
  }, [playerName]);

    return (props.trigger) ? (
        <div className="TryAgain">
            <div className="popup-inner">
                <h2>Almost there! You are so close {playerName}! Give it another try :3</h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>You can do it {playerName} ^_^</button>
                { props.children }
            </div>
        </div>
    ) : "";
};