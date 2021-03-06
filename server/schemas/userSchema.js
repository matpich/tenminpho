const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  imagesCount: { type: Number, default: 0 },
  userImages: { type: Array, default: [] }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, config.jwtKey);
  return token;
};

module.exports = userSchema;
