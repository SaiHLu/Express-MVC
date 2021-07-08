const { check } = require("express-validator");

const rules = [
  check("email", "Please enter valid email").isEmail(),
  check("password", "Password is required").exists(),
];

module.exports = rules;
