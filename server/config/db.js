const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGO_URI);

let db;

async function connectToDB() {
  if (!db) {
    await client.connect();
    db = client.db('website'); 
    console.log('Connected to MongoDB');
  }
  return db;
}

async function closeDB() {
  if (client.isConnected()) {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

module.exports = { connectToDB, closeDB };
