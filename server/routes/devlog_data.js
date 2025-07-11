const express = require('express');
const router = express.Router();
const { connectToDB } = require('../config/db');

router.get('/devlogs', async (req, res) => {
  try {
    const db = await connectToDB();
    const logs = await db.collection('devlogs').find({}).sort({ date: -1 }).toArray();

    const safeLogs = logs.map(({ _id, date, sections }) => ({
      id: _id.toString(),
      date: new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      sections,
    }));

    res.status(200).json(safeLogs);
  } catch (err) {
    console.error("Error fetching devlogs:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
