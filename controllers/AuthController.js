const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");

const User = require("../models/User");

const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) res.status(400).json({ msg: "Invalid credentials" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) res.status(400).json({ msg: "Invalid credentials" });

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (error, token) => {
        if (error) throw error;
        res.status(201).json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLoginUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = login;
exports.getLoginUser = getLoginUser;
