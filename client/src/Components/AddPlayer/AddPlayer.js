import "../AddPlayer/AddPlayer.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AddPlayer(props) {
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("Name") || ""
  );

  const history = useHistory();
  const savePlayer = () => {
    const newPlayer = {
      name: playerName,
    };
  };

  useEffect(() => {
    console.log(localStorage.getItem("valueInPlayerName"));
    localStorage.setItem("Name", playerName);
  }, [playerName]);

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    savePlayer();
    setPlayerName("");
  };

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="AddPlayer">
      <div className="grid-wrapper">
        <div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="player-name">
              <div className="input-name">
                <h1>Welcome {playerName} :)</h1>
              </div>
              <div className="input-field">
                <label>
                  <input
                    name="playerName"
                    value={playerName}
                    type="text"
                    onChange={handleInputChange}
                    placeholder="name"
                    required
                  />
                </label>
              </div>
            </div>
          </form>
          <button onClick={handleClick}>Let's play!</button>
        </div>
      </div>
    </div>
  );
}
export default AddPlayer;
