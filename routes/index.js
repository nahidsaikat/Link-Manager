var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var card_list = [];
  for (var i=0; i<5; i++) card_list.push([i, i, i]);
  res.render('home.html', { title: 'Link Manager', card_list: card_list });
});

module.exports = router;
