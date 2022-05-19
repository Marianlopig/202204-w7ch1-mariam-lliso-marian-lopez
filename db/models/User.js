const { Schema, model } = require("mongoose");

const FavUserSquema = new Schema({
  serie_id: { type: String },
  watched: { type: Boolean },
});
const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean },
  series: [FavUserSquema],
});

const User = model("User", UserSchema, "users");

module.exports = User;
