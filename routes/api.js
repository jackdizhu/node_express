var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
  	code: '1',
  	msg: 'ok'
  });
});

module.exports = router;
