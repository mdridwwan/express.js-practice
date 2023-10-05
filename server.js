
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());
const userModel = require("./models/user.model")


mongoose.connect('mongodb+srv://practiceuserapp:dRfgazY34uMsrx7a@cluster0.ufevr.mongodb.net/Practiceapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});




app.get('/', async(req, res) => {
  const user = await userModel.create({
    name: "Ridwan",
    email: "ridwan@gmail.com",
    roll: "478773",
    class: "Ten",
    group: "Science"
  });
  res.json(user);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});