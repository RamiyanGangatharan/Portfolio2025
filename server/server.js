require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const contactRoutes = require('./routes/contact');
const rootRoutes = require('./routes/root');
const { connectToDB } = require('./config/db');
const devlogsRoutes = require('./routes/devlog_data');
const projectRoutes = require('./routes/project_data');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS - only allow your frontend origin
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// Connect to DB once before starting server
connectToDB()
  .then(() => {
    // Routes
    app.use('/', rootRoutes);
    app.use('/contact', contactRoutes);
    app.use('/data', devlogsRoutes);
    app.use('/data', projectRoutes);
    
    // Start server
    app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`);});
  })
  .catch(err => {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  });
