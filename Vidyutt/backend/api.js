const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const uri = 'mongodb://localhost:27017';

// Connect to MongoDB
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');

    // Database references
    const databases = {
      delhi: client.db('Delhi'),
      brpl: client.db('BRPL'),
      ndpl: client.db('NDPL'),
      bypl: client.db('BYPL'),
      ndmc: client.db('NDMC'),
      mes: client.db('MES'),
    };

    // Helper function to create routes for each entity
    const createRoutes = (entity, db) => {
      app.get(`/api/${entity}/predictions`, async (req, res) => {
        try {
          const data = await db.collection('prediction').find().toArray(); // Correct collection name
          res.json(data);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });

      app.get(`/api/${entity}/actual`, async (req, res) => {
        try {
          const data = await db.collection('actual data').find().toArray(); // Correct collection name
          res.json(data);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
    };

    // Create routes for each entity
    Object.entries(databases).forEach(([entity, db]) => {
      createRoutes(entity, db);
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
