var express = require('express');
var router = express.Router();
const message = require('../model/messages')
/* GET home page. */
async function getmsg(req,res)
{
  let messages = await message.find({}).exec();
  console.log(messages);
  console.log("get message",messages);
  res.render('index', { title: "Mini Messageboard", messages: messages });
}
router.get('/', function(req, res, next) {
  getmsg(req,res);
});

module.exports = router;
