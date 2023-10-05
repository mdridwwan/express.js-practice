const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    roll: String,
    class: String,
    group: String,
})

module.exports = mongoose.model("User", userSchema);