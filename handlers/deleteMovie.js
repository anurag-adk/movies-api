const deleteMovie = (req, res) => {
  res.status(200).json({
    message: "Movie Deleted",
  });
};

module.exports = deleteMovie;
