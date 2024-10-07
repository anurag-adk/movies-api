const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
