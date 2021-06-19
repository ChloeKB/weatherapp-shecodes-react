import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./Search.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="container main-box">
      <div className="row justify-content-evenly">
        <div className="col-6 box-one">
          <br />
          <Search />
          <Forecast
            city="Madrid"
            date="Monday May 24th"
            time="11:48"
            description="Sunny"
            temperature={28}
            imageUrl="https=//ssl.gstatic.com/onebox/weather/64/sunny.png"
            humidity={20}
            minTemp={17}
            maxTemp={28}
            sunrise="07:02"
            sunset="21:43"
          />
        </div>
      </div>
      <p className="coder"><a href="https://github.com/ChloeKB/weatherapp-shecodes-react">Open-source code</a> by Chloe KB 👩🏼‍💻</p>
    </div>
  );
}
