const express = require('express');
const router = express.Router();
const poultryController = require('../controllers/poultryController');

router.post('/daily-records', poultryController.createRecord);

router.get('/daily-records', poultryController.getRecords);

module.exports = router;