const express = require("express");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const Joi = require("@hapi/joi");

const router = express.Router();

const validationSchema = Joi.object().keys({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required()
});

const User = require("../models/userModel");

router.post("/", async (req, res) => {
  const { error } = Joi.validate(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    validationSchema
  );

  if (error) return res.status(400).send("Wrong data.");

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already exists.");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  });

  const result = await user.save();
  res.status(200).send(result);
});

router.get("/", auth, async (req, res) => {
  const user = await User.findOne({ _id: req.userId });
  res.send(user);
});

router.get("/all", auth, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.delete("/all", auth, async (req, res) => {
  const users = await User.deleteMany();
  res.send(users);
});

module.exports = router;
