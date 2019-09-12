import React, { useContext } from "react";

// import context
import { WeatherContext } from "../context/weatherContext";

// import styles
import {
  WeatherWrapper,
  WeatherMain,
  WeatherTitle,
  WeatherHighLow
} from "../components/styles/StyledWeatherComponent";

export default function WeatherComponent() {
  const [weather] = useContext(WeatherContext);
  return (
    <>
      {weather && (
        <WeatherWrapper>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          />
          <WeatherMain>
            <WeatherTitle>
              It is currently {weather.temp}&#176; C in {weather.name},{" "}
              {weather.country}.
            </WeatherTitle>
            <p>{weather.description}.</p>
          </WeatherMain>
          <WeatherHighLow>
            <div className="high">
              <p>Today's high:</p>
              <h3>{weather.max_temp}&#176; C</h3>
            </div>
            <div className="low">
              <p>Today's low:</p>
              <h3>{weather.min_temp}&#176; C</h3>
            </div>
          </WeatherHighLow>
        </WeatherWrapper>
      )}
    </>
  );
}
