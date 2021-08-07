import React from "react";
import RevampedDate from "./RevampedDate";
import SunriseTime from "./SunriseTime";
import SunsetTime from "./SunsetTime";

export default function DataW(props) {
  return (
<div className="forecastMainWeather">
        <h1>{props.data.city}</h1>
        <p className="date-time">
          <RevampedDate date={props.data.currentDate} />
        </p>
      <img src={props.data.iconUrl} alt={props.data.description} id="icon" />
      <p className="currentTemperature"> {props.data.temperature}ºC </p>
        <p className="weather-description text-capitalize" id="weather-description">
          {props.data.description}
        </p>
        <p className="minmax" id="minmax">
          {" "}
          min {Math.round(props.data.minTemp)}ºC - max {Math.round(props.data.maxTemp)}ºC
        </p>
      <hr />
      <div className="row current-extraInfo">
          <div className="col-3">
            <strong>Wind Speed</strong>
            <br />
            <span>{Math.round(props.data.wind)} km/h</span>
          </div>
          <div className="col-3">
            <strong>Humidity</strong>
            <br />
            <span>{props.data.humidity}%</span>
          </div>
          <div className="col-3">
            <strong>Sunrise</strong>
            <br />
            < SunriseTime date={props.data.sunrise}/>
          </div>
          <div className="col-3">
            <strong>Sunset</strong>
            <br />
            < SunsetTime date={props.data.sunset} />
          </div>
        </div>
        <hr />
    </div>
  )
}