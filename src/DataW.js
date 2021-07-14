import React from "react";
import RevampedDate from "./RevampedDate";

export default function DataW(props) {
  return (
<div className="forecastMainWeather">
        <h1>{props.data.city}</h1>
        <p className="date-time">
          <RevampedDate date={props.data.currentDate} />
        </p>
        <img src={props.data.iconUrl} alt={props.data.description} id="icon" />
        <p className="temperature" id="temperature">
          {Math.round(props.data.temperature)} ºC
        </p>
        <p className="weather-description text-capitalize" id="weather-description">
          Wind Speed: {Math.round(props.data.wind)} km/h
          <br />
          {props.data.description}
        </p>
        <p className="minmax" id="minmax">
          {" "}
          min {Math.round(props.data.minTemp)} ºC - max {Math.round(props.data.maxTemp)} ºC
        </p>
        <hr />
        <p className="sunrise-sunset" id="sunrise-sunset">
          sunrise {props.data.sunrise} (UTC +2)
         <br/>
          sunset {props.data.sunset} (UTC +2)
        </p>
      </div>
  )
}