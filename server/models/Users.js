const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  address: { type: String, default: null },
  phone: { type: String, default: null },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;