import React, { useEffect, useState } from "react";

// import axios
import axios from "axios";

// import styles
import "./App.css";
import GlobalStyle from "./components/styles/GlobalStyle";

// import components
import Layout from "./components/Layout";
import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  // state hook
  const [weather, setWeather] = useState({ weather: {} });

  // componentWillMount effect hook
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          // api key
          const API_KEY = process.env.REACT_APP_API_KEY;

          // store lat
          let lat = position.coords.latitude;

          // store long
          let long = position.coords.longitude;

          // store units
          let units = `metric`;

          // api url
          const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=${units}`;

          // get weather
          axios
            // inject api url
            .get(API_URL)
            // get api response
            .then(function(res) {
              // store response in weather object
              let weatherData = {
                name: res.data.name,
                description: res.data.weather[0].description,
                temp: res.data.main.temp,
                min_temp: res.data.main.temp_min,
                max_temp: res.data.main.temp_max,
                icon: res.data.weather[0].icon
              };
              // set state to weather object
              setWeather(weatherData);
            })
            // catch errors
            .catch(function(error) {
              console.log(error);
            });
        });
      } else {
        console.log("no location");
      }
    }
    getLocation();
  });

  return (
    <>
      <Header></Header>
      <Layout>
        <WeatherContainer weatherData={weather}></WeatherContainer>
        <GlobalStyle />
      </Layout>
    </>
  );
}

export default App;
