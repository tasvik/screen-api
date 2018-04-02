const mongoose = require('mongoose');

//Core project entity
var Company = mongoose.model('Company',{
  name : {
    type : String,
    require : true
  },
  URL : {
    type : String
  },
  Revenue : {
    type : Number
  }
});

module.exports = {Company};
