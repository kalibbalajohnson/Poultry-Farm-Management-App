const express = require('express');
const router = express.Router();
const poultryController = require('../controllers/poultryController');

router.post('/', poultryController.createRecord);

router.get('/', poultryController.getRecords);

module.exports = router;