import React from "react";
import "./DaysForecast.css";


export default function DaysForecast(props) {
  let weatherIcon = props.data.weather[0].icon;
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  console.log(props);
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }
  function day() {
    let now = new Date(props.data.dt * 1000);
    let day = now.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }

  return (
    <div id="weekForecast">
      <p className="weekForecastDay" id="weekForecastDay">{day()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={`weather icon`}
        className="weatherForecastIcon"
      />
      <p id="temperatureForecast">
        <span className="minTemp" id="minTemp">{minTemp()}</span>
        <span className="maxTemp" id="maxTemp"> - {maxTemp()}</span>
      </p>
    </div>
  );
}
