const { check } = require("express-validator");

const rules = [
  check("name", "Name is required").notEmpty(),
  check("email", "Please enter a valid email").isEmail(),
];

module.exports = rules;
