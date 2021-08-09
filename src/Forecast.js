import React, { useState } from "react";
import axios from 'axios';
import DataW from "./DataW";
import WeekForecast from "./WeekForecast.js";
import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, searchedCity] = useState(props.defaultCity);

  function displayWeatherForecast(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      currentDate: new Date(response.data.dt * 1000),
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date((response.data.sys.sunrise + response.data.timezone) * 1000),
      sunset: new Date((response.data.sys.sunset + response.data.timezone) * 1000),
      humidity: response.data.main.humidity,
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
    const apiKey = "0e95dc70e3b986e36396abe481cbe9a6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherForecast);
  }

  if (weatherData.ready) {
    return (
      <div className="searchForm">
        <form onSubmit={submitSearch}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter City"
                className="form-control"
                id="city-form"
                onChange ={cityChange}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn-primary form-control"
              />
            </div>
          </div>
        </form>
        <DataW data={weatherData} />
        <WeekForecast coordinates={weatherData.coordinates} />
      </div>
      );
} 
else {
    search();
    return ("The app is loading... 🔎")
  }
}