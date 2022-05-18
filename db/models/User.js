const { Schema, model } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique },
  password: { type: String, required: true },
  admin: Boolean,
  series: { type: Array },
});
const User = model("User", UserSchema, "users");

module.exports = User;
