const { Schema, model } = require("mongoose");

const PlatformSchema = new Schema({
  name: String,
});
const Platform = model("Platform", PlatformSchema, "platforms");

module.exports = Platform;
