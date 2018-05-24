var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  author: String,
  comment: String,
});

module.exports = mongoose.model('Comment', CommentSchema);