const mongoose = require("mongoose");
const debug = require("debug")("robots:db");

mongoose.connect(process.env.MONGO_URI);
