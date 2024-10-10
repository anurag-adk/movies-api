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
    const result = await movieModel.deleteOne({ _id: id });
    // console.log(result);
    // deleteOne() doesn't throw any errors but it returns {acknowledged:boolean, deletedCount:Number} thus if acknowledged is true and count is 0 then that means request was successfully processed by the server but nothing was deleted. this means the _id that we sent doesn't exist (maybe it's already deleted).

    if (result.deletedCount === 0) {
      res.status(404).json({
        status: "Failed",
        message: "Data with Id Not Found",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Movie Deleted",
  });
};

module.exports = deleteMovie;
