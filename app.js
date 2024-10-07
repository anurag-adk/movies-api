const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const indexHandler = require("./handlers/indexHandler");

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

app.get("/", indexHandler);

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});
