const mongoose = require("mongoose");

const getMovies = async (req, res) => {
  const movieModel = mongoose.model("movies");
  try {
    const listMovies = await movieModel.find({
      // rating: 8.8,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }
  res.status(200).json({
    status: "Success",
    message: "All Movies",
    movies: listMovies,
  });
};

module.exports = getMovies;
