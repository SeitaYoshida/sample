var express = require('express');
var router = express.Router();
var title1 = 'Hello';
var messages1 = 'everyOne';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: title1 , messages: messages1});
});

module.exports = router;
