const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://root:password@mongo:27017/?authSource=admin")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("<h2>hi there!</h2>");
});

console.log(process.env);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
