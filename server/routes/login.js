const express = require('express');

const router = express.Router();

const User = require('../models/userModel');

router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  res.send(user);
});

module.exports = router;
