import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import weatherIcons from "./weatherIcons.json";
import translations from "../../initi18n/content/translation.json";

const WeatherApp = () => {
  const { language } = useLanguage();
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "5267af40013b633d8858ae94ed177e54";
  const weathers = translations.weatherApp; 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [apiKey]);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const getWeatherIcon = (weatherDescription) => {
    const iconClass = weatherIcons[weatherDescription];
    return iconClass ? <i className={iconClass}></i> : null;
  };

  return (
    <div>
      <h2>{weathers.title[language]}</h2>
      {loading && <p>{weathers.loading[language]}</p>}
      {weatherData && (
        <div className="weather">
          <p>{weathers.city[language]}: {weatherData.name}</p>
          <p>{weathers.temperature[language]}: {kelvinToCelsius(weatherData.main.temp)}°C</p>
          <p>{weathers.weather[language]}: {weatherData.weather[0].description}</p>
          {weatherData.weather && weatherData.weather.length > 0 && (
            <div>
              <p>{weathers.weatherIconAlt[language]}: {getWeatherIcon(weatherData.weather[0].description)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
