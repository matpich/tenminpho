const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: Number,
    date: {type: Date, default: Date.now}
});

module.exports = userSchema;


