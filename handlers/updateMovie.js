const mongoose = require("mongoose");

const updateMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");

  // console.log(req.body);

  const { _id, name, info, img, rating } = req.body;
  try {
    if (!_id) throw "Id is missing";
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
    return;
  }

  try {
    await movieModel.updateOne(
      {
        _id,
      },
      {
        name,
        info,
        img,
        rating,
      },
      {
        runValidators: true,
      }
    );
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }
  res.status(200).json({
    status: "Success",
    message: "Movie Updated",
  });
};

module.exports = updateMovie;
