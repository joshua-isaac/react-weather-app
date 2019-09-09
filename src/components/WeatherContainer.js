import React from "react";

export default function WeatherContainer({ weatherData }) {
  const roundedTemp = Math.round(weatherData.temp);
  const iconId = weatherData.icon;
  return (
    <div>
      <h3>Displaying the current weather for {weatherData.name}</h3>

      <img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} />
      <h3>{roundedTemp}&#176; C</h3>
      <p>{weatherData.description}.</p>
    </div>
  );
}
