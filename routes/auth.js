const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get login user" });
});

router.post("/", (req, res) => {
  res.json({ msg: "post login user" });
});

module.exports = router;
