const express = require('express');
const router = express.Router();
const poultryController = require('../controllers/poultryController');

router.post('/poultry', poultryController.createRecord);
router.get('/poultry', poultryController.getRecords);

module.exports = router;