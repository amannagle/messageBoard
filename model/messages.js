const mongoose = require("mongoose");
const url = `mongodb+srv://amanagent98:aman1234@cluster0.vmwqufu.mongodb.net/Messageboard?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const messageSchema = new mongoose.Schema({
  user:String,
  text:String,
  added:Date,
});

module.exports = mongoose.model("Message", messageSchema);