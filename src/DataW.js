import React from "react";
import RevampedDate from "./RevampedDate";

export default function DataW(props) {
  return (
<div className="forecastMainWeather">
        <h1>{data.city}</h1>
        <p className="date-time">
          <RevampedDate date={weatherData.currentDate} />
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
  )
}