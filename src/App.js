import React from "react";
import axios from "axios";
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
          <Forecast defaultCity="Madrid" />
        </div>
      </div>
      <p className="coder"><a href="https://github.com/ChloeKB/weatherapp-shecodes-react">Open-source code</a> by Chloe KB 👩🏼‍💻</p>
    </div>
  );
}
