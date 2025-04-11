import React, { useState } from 'react';
import WeatherForm from '../../client/src/components/WeatherForm';
import WeatherDisplay from '../../client/src/components/WeatherDisplay';
import InfoModal from '../../client/src/components/InfoModal';
// import api from './api';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleSearch = async (location) => {
    try {
      const response = await axios.post("http://localhost:5000/api/weather", { location });
      setWeather(response.data);
    } catch (err) {
      alert('Error fetching weather. Check location or try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Weather App - [Eva Patel]</h1>
      <button className="btn btn-info mb-3" onClick={() => setShowInfo(true)}>Info</button>
      <WeatherForm onSearch={handleSearch} />
      <WeatherDisplay data={weather} />
      <InfoModal show={showInfo} handleClose={() => setShowInfo(false)} />
    </div>
  );
}

export default App;
