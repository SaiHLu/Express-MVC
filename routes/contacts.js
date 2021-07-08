const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get contact" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get contact" });
});

router.post("/", (req, res) => {
  res.json({ msg: "post contact" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "update contact" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "update contact" });
});

module.exports = router;
