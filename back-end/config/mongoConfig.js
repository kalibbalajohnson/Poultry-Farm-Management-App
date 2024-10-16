const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://kalijoe11:DseNJnKKOPkqsTLq@poultry-management.7x02b.mongodb.net/?retryWrites=true&w=majority&appName=Poultry-Management";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    // Connect the client to the database
    await client.connect(); 
    // Verify connection by pinging the database
    await client.db("admin").command({ ping: 1 }); 
    console.log("Successfully connected to MongoDB!");

    // Return the client to be used in other modules
    return client;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error; 
  }
}

// Export both the connection function and the client
module.exports = { connectToMongoDB, client };
