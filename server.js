const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/users'));

// Serve static assets if it's in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));
