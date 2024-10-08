const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
    minlength: [3, "Name is too short"],
  },
  info: {
    type: String,
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
    required: [true, "Rating cannot be empty"],
    // min: [0, "Rating must be between 0-10"],
    // max: [10, "Rating must be between 0-10"],

    //custom validator...
    //Validate contains two keys validator and message. validator expects a callback function wich inherits value from rating. if function returns false then error is triggered however if function returns false error is not triggered. message contains the error message if validation fails i.e if function returns false which is then caught by our modules

    validate: {
      validator: (value) => {
        if (value < 0 || value > 10) return false;
      },
      message: "Rating must be between 0-10",
    },
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
