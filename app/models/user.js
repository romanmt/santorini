app = module.parent.exports;

console.log(module);

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var User = new Schema({
    firstName  : String
  , lastName   : String
  , email      : String
  , acrualRate : Number
  , name       : String
});

User.virtual('fullName').get(function() {
  return this.firstName + " " + this.lastName;
});

mongoose.model('User', User);

module.exports = mongoose.model('User');
