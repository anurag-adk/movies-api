const mongoose = require("mongoose");

const getMovies = async (req, res) => {
  const movieModel = mongoose.model("movies");
  const listMovies = await movieModel.find({
    // rating: 8.8,
  });
  res.status(200).json({
    // message: "All Movies",
    movies: listMovies,
  });
};

module.exports = getMovies;
