import React from 'react';
import { useState,useEffect} from 'react';
import './weather.css';

import {API_KEY, URL} from './cloud'

function Weather () {

   const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();    
    let month=months[d.getMonth()];
    let year=d.getFullYear(); 
    return `${day} ${date} ${month} ${year}`
  }

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData=async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
      });
 
    await fetch(`${URL}weather?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
      .then(res => res.json()) 
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long]);

  return (
    <div className="Weather">
      
      {(typeof data.main != "undefined") ? (
        <div>   
          <div className="location-box">
            <div className="date">{dateBuilder(new Date ())}</div>
            <div className="location">{data.name},{data.sys.country}</div>
            
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(data.main.temp)} °C </div> 
            <div className="weather">{data.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
        </div>
  );
}

export default Weather;
