const jwt = require("jsonwebtoken");
const config = require("../config.json");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(config.jwtKey);

  if (!token) return res.status(401).send("No token provided.");

  try {
    const payload = jwt.verify(token, config.jwtKey);
    req.userId = payload;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};
