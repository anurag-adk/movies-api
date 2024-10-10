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
app.use(express.json()); //middleware for json
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
app.get("/api/", indexHandler);
app.post("/api/movies", addMovie); //create
app.get("/api/movies", getMovies); //read
app.patch("/api/movies/:id", updateMovie); //update
app.delete("/api/movies", deleteMovie); //delete

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});
