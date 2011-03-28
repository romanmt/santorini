var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
function fullName () {
  return this.firstName + " " + this.lastName;
}

var Event = new Schema({
	title   : String
  , start   : Date
  , end     : Date
});

var User = new Schema({
    firstName   : String
  , lastName    : String
  , email       : String
  , acrualRate  : Number
  , ptoBalance  : Number
  , updatedAt   : { type: Date, default: new Date() }
  , createdAt   : { type: Date, default: new Date() }
  , fullName    : { type: String, get: fullName }
  , events    : [Event]
});

mongoose.model('User', User);

module.exports = mongoose.model('User');
