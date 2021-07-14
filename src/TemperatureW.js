import React, { useState } from "react";

export default function TemperatureW(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault;
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault;
    setUnit("celsius");
  }

  if (unit === 'celsius') {
    return (
      <div>
        <p className="temperature" id="temperature">
          {Math.round(props.celsius)} ºC | <a href="/" onclick={convertToF}>ºF</a>
        </p>
      </div>
    );
  } else {
    let fTemp = (props.celsius * 1.8) + 32;
    return (
      <div>
        <p className="temperature" id="temperature">
          {Math.round(fTemp)} <a href="/" onclick={convertToC}>ºC</a> | ºF
        </p>
      </div>
    );
  }
  
}
