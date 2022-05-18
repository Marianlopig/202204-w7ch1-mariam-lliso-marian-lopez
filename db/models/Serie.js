const { Schema, model } = require("mongoose");

const SerieSchema = new Schema({
  name: String,
  platform: String,
});

const Serie = model("Serie", SerieSchema, "series");

module.exports = Serie;
