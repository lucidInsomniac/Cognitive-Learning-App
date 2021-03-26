import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//icon for header
import { faHiking } from '@fortawesome/free-solid-svg-icons'
//icon for avatar from dashboard
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import './ProfileView.css'


export default function ProfileView () {

    // //state for games data to be fetched
    // const [games, setGames] = useState([]);
    // const

    // //put useEffect to pull data for user here
    // userEffect(() => {
    //     //this connects to the server.js routes
    //     fetch("/server")
    //     //our promise for fetch with a request
    //     .then(response => response.json())
    //     //this is the response returned with actual data
    //     .then(games => {
    //         console.log(games);
    //         //upon success, update games
    //         setGames(games);
    //         //check
    //         console.log( 'Dashboard Avatar', games)
    //     })
    //     //catch any errors
    //     .catch(err => {
    //         //upon failure, show error message
    //         console.log("ERROR:", err.message);
    //     });
    //     //gets saved into an empty state as new array
    // }, []); 

    return (

        <div className="ProfileView">
            <div className="profile-header-container">
                <h1>Daisie's Journey 
                    <FontAwesomeIcon 
                        icon={faHiking} 
                        className="profile-header" 
                    />
                </h1>
            </div>

            <div className="avatar-on-profile">
                <FontAwesomeIcon 
                    icon={faUserAstronaut} 
                    size="3x" 
                    className="avatar-on-profile"
                />
            </div>

            <div className="table-container">
                <table className="table-hover">
                    <thead id="thead">
                        <tr id="thead">
                            <th id="thead">Game Name</th>
                            <th id="thead">Game Level</th>
                            <th id="thead">Game Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Puzzle</td>
                            <td>4</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Categories</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Situations</td>
                            <td>1</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="total-score-container">
                <h3>Total Score: 5</h3>
            </div>

        </div>
    )
}