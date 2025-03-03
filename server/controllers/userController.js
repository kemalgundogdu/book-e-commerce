const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    // name from email
    const name = email.split("@")[0];
    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "User not created", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // create token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // send token in cookie
    res.cookie("token", token, { httpOnly: true, sameSite: 'lax', secure: false });
    res.status(200).json({ message: "Login success" });
  } catch (error) {
    res.status(400).json({ message: "User not found", error });
  }
};

const me = async (req, res) => {
  const cookies = req.cookies || {};
  const token = cookies.token;
  if (!token) return res.status(401).json({ message: "Giriş yapılmadı" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = { id: decoded.id, email: decoded.email };
    res.json({ user });
  } catch (error) {
    res.status(401).json({ message: "Geçersiz token" });
  }
};

module.exports = { register, login, me };
