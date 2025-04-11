const axios = require('axios');
const WeatherRecord = require('../models/WeatherRecord');

exports.fetchWeather = async (req, res) => {
  const { location } = req.query;
  const API_KEY = process.env.WEATHER_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;
    res.json({
      location: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      date: new Date().toISOString().slice(0, 10)
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather.' });
  }
};

exports.createRecord = async (req, res) => {
  try {
    const record = new WeatherRecord(req.body);
    await record.save();
    res.json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  const records = await WeatherRecord.find();
  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const { id } = req.params;
  const updated = await WeatherRecord.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  await WeatherRecord.findByIdAndDelete(id);
  res.json({ message: 'Deleted successfully' });
};
