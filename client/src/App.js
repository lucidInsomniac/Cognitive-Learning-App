import React /*, { useState, useEffect }*/ from "react";
// Install React Router Dom before using
import { BrowserRouter as Router } from "react-router-dom";
//Import Sidebar component
import Sidebar from "./Components/Sidebar/Sidebar";
//import Routes component
import Routes from "./Components/ReactRoutes/Routes";

//import CSS file for App
import "./App.css";



export default function App() {

  //state for games data to be fetched
  // const [games, setGames] = useState([]);

  // //state for user data to be fetched
  // const [user, setUser] = ("")

  //put useEffect for games to pull data for user here to pass 
  //to routes, and profile
  // useEffect(() => {
  //   //this connects to the server.js routes
  //   fetch("/server")
  //   //our promise for fetch with a request
  //   .then(response => response.json())
  //   //this is the response returned with actual data
  //   .then(games => {
  //       console.log(games);
  //       //upon success, update games
  //       setGames(games);
  //       //check
  //       console.log( 'Dashboard Avatar', games)
  //   })
  //     //catch any errors
  //     .catch(err => {
  //       //upon failure, show error message
  //       console.log("ERROR:", err.message);
  //     });
  //   //gets saved into an empty state as new array
  // }, []);   



  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* This is the Component for the Sidebar */}
          <Sidebar />
          
          {/* This is the Component for our React Routes */}
          <Routes />
        </header>
      </div>
    </Router>
  );
};


