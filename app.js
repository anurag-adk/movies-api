const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const indexHandler = require("./handlers/indexHandler");
const getMovies = require("./handlers/getMovies");
const addMovie = require("./handlers/addMovie");
const updateMovie = require("./handlers/updateMovie");
const deleteMovie = require("./handlers/deleteMovie");

require("./models/movies.model");

const app = express();
const PORT = process.env.PORT;
const db_conn = process.env.db_conn;

mongoose
  .connect(db_conn, {})
  .then(() => {
    console.log(`Database conection successful!`);
  })
  .catch((err) => {
    console.log(`Database connection failed!`);
  });

//Routes are here...
app.get("/", indexHandler);
app.post("/movies", addMovie); //create
app.get("/movies", getMovies); //read
app.patch("/movies", updateMovie); //update
app.delete("/movies", deleteMovie); //delete

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});
