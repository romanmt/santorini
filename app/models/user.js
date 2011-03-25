var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
function fullName () {
  return this.firstName + " " + this.lastName;
}

var Request = new Schema({
    start   : Date
  , end     : Date
  , status  : { type: String, default: "pending" } 
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
  , requests    : [Request]
});

mongoose.model('User', User);

module.exports = mongoose.model('User');
