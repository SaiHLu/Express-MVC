const { check } = require("express-validator");

const rules = [
  check("name", "Please enter name").notEmpty(),
  check("email", "Please enter valid email").isEmail(),
  check("password", "Please enter at leat 6 characters").isLength({ min: 6 }),
];

module.exports = rules;
