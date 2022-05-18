const { Schema, model } = require("mongoose");

const SerieSchema = new Schema({
  name: String,
  platforms: Array,
});

const Serie = model("Serie", SerieSchema, "series");

module.exports = Serie;
