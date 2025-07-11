const express = require('express');
const router = express.Router();
const { connectToDB } = require('../config/db');

router.get('/projects', async (req, res) => {
  try {
    const db = await connectToDB();
    const logs = await db.collection('projects').find({}).sort({ date: -1 }).toArray();

    const safeLogs = logs.map(({ _id, title, description, badges, link }) => ({
      id: _id.toString(),
      title,
      description,
      badges,
      link
    }));

    res.status(200).json(safeLogs);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
