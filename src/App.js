import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Forecast from "./Forecast.js";


export default function App() {
  return (
    <div className="App">
      <div className="container" id="main-box">
        <Forecast defaultCity="Madrid" />
        <p className="coder"><a href="https://github.com/ChloeKB/weatherapp-shecodes-react">Open-source code</a> by Chloe KB 👩🏼‍💻</p>
      </div>
    </div>
  );
}
