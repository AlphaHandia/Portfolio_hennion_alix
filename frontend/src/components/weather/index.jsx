
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '5267af40013b633d8858ae94ed177e54'; 


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Afficher un message d'erreur à l'utilisateur
      } finally {
        setLoading(false);
      }
    };
  
    fetchWeatherData();
  }, [apiKey]);
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };
  return (
    <div>
      <h2>Weather App</h2>
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {kelvinToCelsius(weatherData.main.temp)}°C</p>
        </div>
      )}
    </div>
  )
      }

export default WeatherApp
