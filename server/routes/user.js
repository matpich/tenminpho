const express = require('express');

const router = express.Router();

const User = require('../models/userModel');

router.post('/', async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  const result = await user.save();
  res.send(result);
});

router.get('/', async (req, res) => {
  const allUsers = await User.find();
  res.send(allUsers);
});

module.exports = router;
