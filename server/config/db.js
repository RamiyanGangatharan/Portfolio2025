const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsInsecure: false,
  serverApi: { version: '1' }, // Optional: for Atlas API version
});

let db;

async function connectToDB() {
  if (!db) {
    try {
      await client.connect();
      db = client.db('website'); 
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
  return db;
}

async function closeDB() {
  if (client && client.topology && client.topology.isConnected()) {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

module.exports = { connectToDB, closeDB };
