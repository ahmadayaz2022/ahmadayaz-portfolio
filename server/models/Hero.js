const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Hero", heroSchema);