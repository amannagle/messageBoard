const mongoose = require("mongoose");
const url = process.env.mongodbURL
console.log("url is ",url)
mongoose.set("strictQuery", false);
mongoose.connect(url);
const messageSchema = new mongoose.Schema({
  user:String,
  text:String,
  added:Date,
});

module.exports = mongoose.model("Message", messageSchema);