const mongoose = require('mongoose');
const WeatherRecordSchema = new mongoose.Schema({
  location: String,
  date: String,
  temperature: Number,
  description: String,
  icon: String
});
module.exports = mongoose.model('WeatherRecord', WeatherRecordSchema);
