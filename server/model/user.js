var mongoose = require('mongoose');

//Stores User info for login
var User = mongoose.model('User', {
  emailAddress : {
    type : String,
    minlength : 1
  }
});

module.exports = {User};