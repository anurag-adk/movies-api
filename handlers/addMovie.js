const addMovie = (req, res) => {
  res.status(200).json({
    message: "Movie Added",
  });
};

module.exports = addMovie;
