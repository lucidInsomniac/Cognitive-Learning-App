import React from "react";
// Install React Router Dom before using
import { BrowserRouter as Router } from "react-router-dom";
//Import Sidebar component
import Sidebar from "./Components/Sidebar/Sidebar";
//import Routes component
import Routes from "./Components/ReactRoutes/Routes";

//import CSS file for App
import "./App.css";



export default function App() {

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


