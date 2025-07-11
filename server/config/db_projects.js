const { connectToDB } = require('./db');

async function getAll() {
  const db = await connectToDB();
  return db.collection('projects').find({}).toArray();
}

module.exports = { getAll };
