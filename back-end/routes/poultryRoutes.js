// Import the express module
const express = require('express');
const router = express.Router();
// Import the poultryController from the controllers directory
const poultryController = require('../controllers/poultryController');
// Route to create a new poultry record (POST request)
router.post('/', poultryController.createRecord);
// Route to retrieve all poultry records (GET request)
router.get('/', poultryController.getRecords);
// Export the router object to be used in other parts of the application
module.exports = router;