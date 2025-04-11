import React, { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city, zip, or coordinates"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary mt-2">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
