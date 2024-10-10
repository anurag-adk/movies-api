const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");

  // console.log(req.query);

  const { id } = req.query;
  try {
    if (!id) throw "Id is missing";
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
    return;
  }

  try {
    await movieModel.deleteOne({ _id: id });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Movie Deleted",
  });
};

module.exports = deleteMovie;
