const { validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createContact = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) res.status(400).json({ errors: errors.array });

  const { name, email, phone, type } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id,
    });

    const contact = await newContact.save();

    res.status(201).json({ contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};

  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) res.status(404).json({ msg: "Contact not found" });

    if (contact.user.toString() !== req.user.id)
      res.status(401).json({ msg: "Not authorized" });

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: contactFields,
      },
      { new: true }
    );

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    let contact = await Contact.findByIdAndRemove(req.params.id);

    if (!contact) res.status(404).json({ msg: "Contact not found" });

    if (contact.user.toString() !== req.user.id)
      res.status(401).json({ msg: "Not authorized" });

    res.status(200).json({ msg: "Contact has been removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContacts = getContacts;
exports.createContact = createContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;
