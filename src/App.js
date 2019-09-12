import React from "react";

// import styles
import "./App.css";
import GlobalStyle from "./components/styles/GlobalStyle";

// import components
import Layout from "./components/Layout";
import Header from "./components/Header";
import WeatherComponent from "./components/WeatherComponent";
import FormComponent from "./components/FormComponent";

// import context provider
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <WeatherProvider>
          <FormComponent />
          <WeatherComponent />
        </WeatherProvider>
        <GlobalStyle />
      </Layout>
    </>
  );
}

export default App;
