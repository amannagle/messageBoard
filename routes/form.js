var express = require('express');
var router = express.Router();
const message = require('../model/messages');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  let messageText=req.body.message;
  let messageUser = req.body.user;
  let msg = new message({"user":messageUser,"text":messageText,"added":new Date()})
  msg.save().then(()=>{
    console.log(msg);
    console.log("added to database");
  })
  .catch(error=>{
    console.log(error)
  })
  res.redirect('/')
});

module.exports = router;
