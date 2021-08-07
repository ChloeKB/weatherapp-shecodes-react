import axios from "axios";
import React, { useEffect, useState } from "react";
import DaysForecast from "DaysForecast";

export default function WeekForecast(props) {
  let [loadedData, setLoaded] = useState(false);
  let [forecastData, setForecast] = useState(null)

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loadedData) {
    return (
      <div>
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <DaysForecast data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}

          <hr />
        </div>
      </div>
    );
  } else {
    let apiKey = `dc61646fab1512ff70fdca30d4a70361`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}