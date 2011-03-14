var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var User = new Schema({
	name  : String
  , email : String
});

mongoose.model('User', User);