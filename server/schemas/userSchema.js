const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  imagesCount: { type: Number, default: 0 },
  userImages: { type: Array, default: [] }
});

module.exports = userSchema;
