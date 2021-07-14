import React, { useState } from "react";
import axios from 'axios';
import DataW from "./DataW";
import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Forecast(props) {
  const [data, weatherData] = useState({ ready: false });
  const [city, searchedCity] = useState(props.defaultCity);

  function displayWeatherForecast(response) {
    weatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      currentDate: new Date(response.data.dt * 1000),
    });
  }

  function submitSearch(event) {
    event.preventDefault();
    // search for a city here - we need to access what the user searches for
    search();
  }

  function cityChange(event) {
    searchedCity(event.target.value);
  }

  function search() {
    const apiKey = "dc61646fab1512ff70fdca30d4a70361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayWeatherForecast);
  }

  if (weatherData.ready) {
    return (
      <div className="searchForm">
      <form id="city-form" onSubmit={submitSearch}>
        <input
          type="search"
          placeholder="Type your city"
          autofocus="on"
          autocomplete="off"
          id="search-text-input"
          onChange ={cityChange}
        />
        <button id="submit-button">Search</button>
        </form>
        <DataW data={data}/>
    </div>
      );
  } else {
    return ("The app is loading... 🔎")
  }
}

