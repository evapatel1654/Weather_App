// backend/index.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/weather', async (req, res) => {
  const location = req.query.q;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!location || !apiKey) {
    return res.status(400).json({ error: 'Missing location or API key' });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Weather API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error fetching weather. Check location or try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
