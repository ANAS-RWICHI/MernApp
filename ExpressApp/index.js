const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send('Hello from Api Server!');
});










mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});