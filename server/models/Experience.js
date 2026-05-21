const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: String,
});

module.exports = mongoose.model("Experience", experienceSchema);