require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: "Hello from the backend! This side of the app currently does nothing :)"});
});

// Start server
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });
