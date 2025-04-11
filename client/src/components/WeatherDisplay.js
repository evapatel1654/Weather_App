import React from 'react';
import { FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa';

const WeatherDisplay = ({ data }) => {
  if (!data) return null;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Weather in {data.city}</h5>
        <p><FaTemperatureHigh /> Temperature: {data.temperature}°C</p>
        <p><FaTint /> Humidity: {data.humidity}%</p>
        <p><FaWind /> Wind Speed: {data.windSpeed} m/s</p>
        <p>Description: {data.description}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
