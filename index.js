const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
const path = require("path");
const passport = require("passport");
const exSession = require("express-session");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
//Passport Config
app.use(exSession, {
  secret: "bu bizim güvenlik cümlemizdir",
  resave: false,
  saveUninitialized: false,
});
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //Which strategy?
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost/BlogApp");

app.use(indexRoutes);
app.use(adminRoutes);
const server = app.listen(8800, (err) => {
  if (err) {
    const getPort = server.address().port;
    console.log("check your port number", getPort);
  }
  console.log("Connected");
});
