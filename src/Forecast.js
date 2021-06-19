import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Forecast(props) {
  return (
    <div className="forecastMainWeather">
      <h1>{props.city}</h1>
      <p className="date-time">
        {props.date}
        <br />
        {props.time}
      </p>
      <img src={props.imageUrl} alt="sunny weather icon" id="icon" />
      <p className="temperature" id="temperature">
        {props.temperature} ºC
      </p>
      <p className="weather-description" id="weather-description">
        {props.description}
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
}
