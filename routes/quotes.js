var express = require('express');
var router = express.Router();


/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  res.json([{"author": "me", "text": "hello. need coffee."}, {"author": "you", "text": "need coffee too"}]);
});

/* GET SINGLE Comment BY ID */
router.get('/:id', function(req, res, next) {
 
});

/* SAVE Comment */
router.post('/', function(req, res, next) {

});

/* UPDATE Comment */
router.put('/:id', function(req, res, next) {

});

/* DELETE Comment */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;