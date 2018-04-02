//NODEJS and 3rd party modules
var express = require('express');
var BodyParser = require('body-parser');

//Project modules
var {mongoose} = require('./db/mongoose');
var {Company} = require('./model/company');
var {User} = require('./model/user');

var app = express();

//Mount middleware
app.use(BodyParser.json());

//route
app.post('/company', (req, res) => {
  var newCompany = new Company({
    name: req.body.name
  });
  
  newCompany.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('screenerApp started');
});