// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // hoặc bất kỳ cổng nào không bị trùng lặp


app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/your_database_name')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const ItemSchema = new mongoose.Schema({
  content: String,
});

const Item = mongoose.model('Item', ItemSchema);

app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Item({ content: req.body.content });
    await newItem.save();
    res.status(201).send(newItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));