const { client } = require("../config/mongoConfig");
const dbName = "poultryDB";
const collectionName = "dailyRecords";

exports.createRecord = async (req, res) => {
  try {
    const newRecord = {
      numberofHens: req.body.numberofHens,
      numberofEggs: req.body.numberofEggs,
      quantityofFood: req.body.quantityofFood,
      dateAdded: new Date(),
    };

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne(newRecord);

    // Send back the inserted record with its ID
    res.status(201).json({ _id: result.insertedId, ...newRecord });
  } catch (error) {
    console.error("Error creating record:", error);
    res
      .status(500)
      .json({ message: "Error creating record", error: error.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const records = await collection.find().toArray();

    res.status(200).json(records);
  } catch (error) {
    console.error("Error retrieving records:", error);
    res
      .status(500)
      .json({ message: "Error retrieving records", error: error.message });
  }
};
