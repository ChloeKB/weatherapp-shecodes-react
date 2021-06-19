import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Forecast(props) {
  const [data, weatherData] = useState({ ready: false});
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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      currentDate: "Friday June 25th",
      currentTime: "11:35",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="forecastMainWeather">
        <h1>{data.city}</h1>
        <p className="date-time">
          Last updated:
          <br />
          {data.currentDate}
          <br />
          {data.currentTime}
        </p>
        <img src={data.iconUrl} alt={data.description} id="icon" />
        <p className="temperature" id="temperature">
          {Math.round(data.temperature)} ºC
        </p>
        <p className="weather-description text-capitalize" id="weather-description">
          Wind Speed: {Math.round(data.wind)} km/h
          <br />
          {data.description}
        </p>
        <p className="minmax" id="minmax">
          {" "}
          min {Math.round(data.minTemp)} ºC - max {Math.round(data.maxTemp)} ºC
        </p>
        <hr />
        <p className="sunrise-sunset" id="sunrise-sunset">
          sunrise {data.sunrise} (UTC +2)
         <br/>
          sunset {data.sunset} (UTC +2)
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