const getMovies = (req, res) => {
  res.status(200).json({
    message: "All Movies",
  });
};

module.exports = getMovies;
