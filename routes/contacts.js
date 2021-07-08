const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const contactValidations = require("../validations/contactValidations");
const ContactController = require("../controllers/ContactController");

router.get("/", authMiddleware, ContactController.getContacts);

router.post(
  "/",
  [authMiddleware, contactValidations],
  ContactController.createContact
);

router.put("/:id", authMiddleware, ContactController.updateContact);

router.delete("/:id", authMiddleware, ContactController.deleteContact);

module.exports = router;
