import React, { useState, useContext } from "react";

// import styles
import {
  StyledForm,
  StyledButton,
  StyledInput
} from "../components/styles/StyledForm";

// import axios
import axios from "axios";

// import context
import { WeatherContext } from "../context/weatherContext";

export default function FormComponent() {
  // set up state
  const [location, setLocation] = useState("");

  const [weather, setWeather] = useContext(WeatherContext);

  // handle change function
  function onChange(e) {
    const location = e.target.value;
    setLocation(location);
  }

  // handle submit function
  function handleSubmit(e) {
    e.preventDefault();

    // api key
    const API_KEY = process.env.REACT_APP_API_KEY;

    // store units
    let units = `metric`;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=${units}`;

    axios
      .get(API_URL)
      .then(function(res) {
        console.log(res);

        // store response in weather object

        let weatherData = {
          name: res.data.name,
          country: res.data.sys.country,
          description: res.data.weather[0].description,
          temp: res.data.main.temp,
          min_temp: res.data.main.temp_min,
          max_temp: res.data.main.temp_max,
          icon: res.data.weather[0].icon
        };

        setWeather(weatherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder={`Enter Your City Name`}
          value={location}
          onChange={onChange}
        />
        <StyledButton>Get Weather</StyledButton>
      </StyledForm>
    </>
  );
}
