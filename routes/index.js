var express = require('express');
var router = express.Router();
var title1 = 'Expressss';
var divtest = "aaa";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title1 , div: divtest});
});

module.exports = router;
