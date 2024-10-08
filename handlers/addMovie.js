const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");
  const { name, info, img, rating } = req.body;

  let createdMovie; // Define it outside try catch block so that elements outside try catch block could access its value

  try {
    createdMovie = await movieModel.create({
      //If it was defined here then we couldn't access its value below since createdMovie will be restricted withing try catch block
      name: name,
      info: info,
      img: img,
      rating: rating,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }

  res.status(200).json({
    message: "Movie Added",
    movie: createdMovie, //We could not have accessed its value
  });
};

module.exports = addMovie;
