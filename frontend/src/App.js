import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import InfoModal from './components/InfoModal';
import api from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleSearch = async (location) => {
    try {
      const response = await api.post('/weather', { location });
      setWeather(response.data);
    } catch (err) {
      alert('Error fetching weather. Check location or try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Weather App - [Your Name]</h1>
      <button className="btn btn-info mb-3" onClick={() => setShowInfo(true)}>Info</button>
      <WeatherForm onSearch={handleSearch} />
      <WeatherDisplay data={weather} />
      <InfoModal show={showInfo} handleClose={() => setShowInfo(false)} />
    </div>
  );
}

export default App;
