var express = require('express');
var router = express.Router();
const messages = require('../message')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  let messageText=req.body.message;
  let messageUser = req.body.user;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
});

module.exports = router;
