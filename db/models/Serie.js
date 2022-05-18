const { Schema, model } = require("mongoose");

const SerieSchema = new Schema({
  name: String,
  platforms: String,
});

const Serie = model("Serie", SerieSchema, "series");

module.exports = Serie;
