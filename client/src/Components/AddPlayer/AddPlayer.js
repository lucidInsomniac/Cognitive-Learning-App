import "../AddPlayer/AddPlayer.css";
import React, { useState, useEffect } from "react";

function AddPlayer(props) {
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("Name") || ""
  );
  // const [playerAge, setPlayerAge] = useState(0);

  const savePlayer = () => {
    const newPlayer = {
      name: playerName,
      // age: playerAge,
    };
  };

  useEffect(() => {
    console.log(localStorage.getItem("valueInPlayerName"));
    localStorage.setItem("Name", playerName);
  }, [playerName]);

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);

    // if (localStorage.setItem("playerAge", event.target.value)) {
    //   setPlayerAge(event.target.value);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    savePlayer();
    setPlayerName("");
    // setPlayerAge("");
  };

  return (
    <div className="AddPlayer">
      <div className="grid-wrapper">
        <div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="player-name">
              <label>
                Name
                <input
                  name="playerName"
                  value={playerName}
                  type="text"
                  onChange={handleInputChange}
                  required
                />
              </label>
              <p>{playerName}</p>
            </div>
            {/* <div className="player-age">
              <label>
                Age
                <input
                  name="playerAge"
                  value={playerAge}
                  type="text"
                  onChange={handleInputChange}
                  required
                />
              </label>
              <p>{playerAge}</p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddPlayer;
