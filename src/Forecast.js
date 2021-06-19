import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [data, weatherData] = useState({});
  function displayWeatherForecast(response) {
    weatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: 12,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="forecastMainWeather">
        <h1>{weatherData.city}</h1>
        <p className="date-time">
          {props.date}
          <br />
          {props.time}
        </p>
        <img src={props.imageUrl} alt="sunny weather icon" id="icon" />
        <p className="temperature" id="temperature">
          {Math.round(weatherData.temperature)} ºC
        </p>
        <p className="weather-description" id="weather-description">
          {description}
        </p>
        <p className="minmax" id="minmax">
          {" "}
          min {props.minTemp} ºC - max {props.maxTemp} ºC
        </p>
        <hr />
        <p className="sunrise-sunset" id="sunrise-sunset">
          sunrise {props.sunrise} - sunset {props.sunset}
        </p>
      </div>
    );
  } else {
    const apiKey = "dc61646fab1512ff70fdca30d4a70361";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayWeatherForecast);
    
    return ("The app is loading... 🔎")
  }
}