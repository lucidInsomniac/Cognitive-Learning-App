import React, { useState, useEffect } from 'react'
//need to import main component for fontawesome in order to use it
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//icon for header
import { faHiking } from '@fortawesome/free-solid-svg-icons'
//icon for avatar from dashboard
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
//import ProfileView css file
import './ProfileView.css'


export default function ProfileView () {

    //state for games data to be fetched
    const [games, setGames] = useState([]);
    
    // eslint-disable-next-line
    const [playerName, setPlayerName] = useState(
        localStorage.getItem("Name") || ""
      );
    
      useEffect(() => {
        console.log(localStorage.getItem("valueInPlayerName"));
        localStorage.setItem("Name", playerName);
      }, [playerName]);

    //put useEffect to pull data for player here
    useEffect(() => {
        //this connects to the server.js routes
        fetch("/server")
        //our promise for fetch with a request
        .then(response => response.json())
        //this is the response returned with actual data
        .then(games => {
            console.log(games);
            //upon success, update games
            setGames(games);
            //check games variable has value in console log
            console.log( 'Dashboard Avatar', games)
        })
        //catch any errors
        .catch(err => {
            //upon failure, show error message
            console.log("ERROR:", err.message);
        });
        //gets saved into an empty state as new array
    }, []); 



    //check array values for game to extract game_score
    console.log("games array check", games[0])

    //to extract game_score, need to map games
   let gameScore = games.map((game) => (game.game_score))

   //check to see if each game_score was extracted
   console.log("gameScore", gameScore)


   //create a totalScore function with extracted game_score
   function totalScore (gameScore) {

       //use reduce method on gameScore array to 
       //add values from each game_score from games
       let total = gameScore.reduce( (a, b) => a + b, 0);

       //to use the sum, we need to call it in the return
       return (

         <h3>Total Score: { total }</h3>

       )
   };

      

    return (

        <div className="ProfileView">

            <div className="profile-header-container">
                <h1>{playerName}'s Journey 
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
                {/* Our table starts here */}
                <table className="table-hover">

                    {/* This is where the titles of each table column goes */}
                    <thead id="thead">

                        <tr id="thead">

                            <th id="thead">Game Name</th>
                            <th id="thead">Game Level</th>
                            <th id="thead">Game Score</th>

                        </tr>

                    </thead>


                    {/* This is where the data inside the progress table will be displayed */}
                    <tbody>

                        {/* We map games here to get it to display
                        our games data from the database using useEffect */}

                        {
                            games && games.map( (game, index ) => (

                                <tr className="keyrow" key={ index }>

                                    <td key={index}>{game.game_name}</td>
                                    <td key={index}>{game.game_lvl}</td>
                                    <td key={index}>{game.game_score}</td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>
            </div>

            <div className="total-score-container">
                {/* insert totalScore passing gameScore 
                array with each game_score as argument */}
                <h3>{totalScore(gameScore)}</h3>
            </div>

        </div>
    )
}