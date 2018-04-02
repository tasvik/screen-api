const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/screenerApp');
console.log('screenerApp : Connected to mongodb');

module.exports = {mongoose};