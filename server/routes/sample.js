const express  = require("express");

const router = express.Router();

const duplicator = require("../middleware/duplicator");

const User = require('../models/userModel');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.post('/:id', duplicator, async (req, res) => {
    const newValue = new User({
        name: req.neq
    })
    const result = await newValue.save();
    res.send(result);
});

module.exports = router;