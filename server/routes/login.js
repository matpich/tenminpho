const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../models/userModel');

router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.send('User not found.');

  if (!(await bcrypt.compare(req.body.password, user.password)))
    return res.send('Wrong password.');

  const token = user.generateAuthToken();
  const result = { name: user.name, email: user.email };
  res.header('x-auth-token', token).send(result);
});

module.exports = router;
