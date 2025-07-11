const express = require('express');
const router = express.Router();
const { getAll } = require('../config/db_service');  

router.get('/test', async (req, res) => {
  try {
    const documents = await getAll();
    res.status(200).json(documents);
  } 
  catch (err) {
    console.error('Failed to fetch documents:', err);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

module.exports = router;
