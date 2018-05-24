var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function(req,res,next) {
	res.send('this is the REST API baby');
});

module.exports = router;