import "../AddPlayer/AddPlayer.css";
import UseLocalStorage from "../UseLocalStorage/UseLocalStorage.js";

function AddPlayer(props) {
  const [playerName, setPlayerName] = UseLocalStorage("");
  const [playerAge, setPlayerAge] = UseLocalStorage(0);

  const savePlayer = () => {
    const newPlayer = {
      name: playerName,
      age: playerAge,
    };
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if (name === "playerName") {
      setPlayerName(value);
    }
    if (name === "playerAge") {
      setPlayerAge(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayerName("");
    setPlayerAge("");
    savePlayer();
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
            </div>
            <div className="player-age">
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
            </div>

            <div className="form-buttons">
              <button type="submit" class="btn btn-secondary">
                Add
              </button>
              <button type="button" class="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddPlayer;
