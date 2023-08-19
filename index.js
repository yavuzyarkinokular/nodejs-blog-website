const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const indexRoutes = require("./routes/indexRoutes");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(indexRoutes);
const server = app.listen(8800, (err) => {
  if (err) {
    const getPort = server.address().port;
    console.log("check yor port number", getPort);
  }
  console.log("Connected");
});
