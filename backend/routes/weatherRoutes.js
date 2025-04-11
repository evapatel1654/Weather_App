const express = require('express');
const router = express.Router();
const controller = require('../controllers/weatherController');

router.get('/fetch', controller.fetchWeather);
router.post('/create', controller.createRecord);
router.get('/records', controller.getRecords);
router.put('/update/:id', controller.updateRecord);
router.delete('/delete/:id', controller.deleteRecord);

module.exports = router;
