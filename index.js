const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const indexRoutes = require("./routes/indexRoutes");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);
const server = app.listen(8800, (err) => {
  if (err) {
    const getPort = server.address().port;
    console.log("check yor port number", getPort);
  }
  console.log("Connected");
});
