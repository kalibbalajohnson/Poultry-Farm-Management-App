const mongoose = require("mongoose");

// Define the Poultry Schema
const poultrySchema = new mongoose.Schema({
  numberofHens: {
    type: Number,
    required: true,
  },
  numberofEggs: {
    type: Number,
    required: true,
  },
  quantityofFood: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

// Compile the schema into a model
const DailyRecords = mongoose.model("Poultry", poultrySchema);
module.exports = DailyRecords;
