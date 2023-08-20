const mongoose = require("mongoose");
const passportMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
});

userSchema.plugin(passportMongoose);

module.exports = mongoose.mode("User", userSchema);
