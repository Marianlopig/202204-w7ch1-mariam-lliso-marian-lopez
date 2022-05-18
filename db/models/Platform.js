const { Schema, model } = require("mongoose");

const PlatformSchema = new Schema({
  name: String,
  series: Array,
});
const Platform = model("Platform", PlatformSchema, "platforms");

module.exports = Platform;
