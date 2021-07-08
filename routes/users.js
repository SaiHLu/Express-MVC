const express = require("express");
const router = express.Router();

const userValidations = require("../validations/userValidations");
const UserController = require("../controllers/UserController");

router.post("/", userValidations, UserController.createUser);

module.exports = router;
