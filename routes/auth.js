const express = require("express");
const router = express.Router();

const authValidations = require("../validations/authValidations");
const authController = require("../controllers/AuthController");
const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, authController.getLoginUser);

router.post("/", authValidations, authController.login);

module.exports = router;
