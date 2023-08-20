const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const ejs = require("ejs");
const path = require("path");
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);
app.use(adminRoutes);
const server = app.listen(8800, (err) => {
  if (err) {
    const getPort = server.address().port;
    console.log("check your port number", getPort);
  }
  console.log("Connected");
});
