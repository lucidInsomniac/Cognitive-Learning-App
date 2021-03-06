import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DashboardView.css";
import Banner from "./HeaderImg/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam } from "@fortawesome/free-solid-svg-icons";
import Weather from "../Weather/weather";

export default function DashboardView() {
  // eslint-disable-next-line
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("Name") || ""
  );

  useEffect(() => {
    console.log(localStorage.getItem("valueInPlayerName"));
    localStorage.setItem("Name", playerName);
  }, [playerName]);

  //event handler to handle the "onClick" event
  function handleClick(e) {
    //check click
    console.log("img was clicked", e);
    //we want the click to bring us to the profile page
    //the path is defined in the Routes component
    return <Link to="/profile" />;
  }

  return (
    <div className="DashboardView">
      <div className="icon-container">
        {/* This is the user icon, we made it into a clickable */}
        <Link to="/profile">
          <FontAwesomeIcon
            icon={faUserAstronaut}
            size="3x"
            className="avatar"
          />
        </Link>
      </div>

      <div className="weather">
        <Weather className="weather" />
      </div>

      {/* This is the header */}
      <h1>
        Hi {playerName},
        <FontAwesomeIcon icon={faGrinBeam} className="welcome" />
        Welcome Back!
      </h1>

      {/* This is the image in Dashboard */}
      <diiv className="banner-container">
        <img
          src={Banner}
          alt="child draws rocket"
          id="banner"
          className="banner"
          // event listener triggers event handler
          onClick={(e) => handleClick(e)}
        />
      </diiv>
    </div>
  );
}
