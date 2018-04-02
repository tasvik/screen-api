const {MongoClient, ObjectId} = require('mongodb');

//connect to db
MongoClient.connect('mongodb://localhost:27017/screenerApp', (err,client) => {
  if(err) { 
    return console.log('screenerApp : Unable to connect to mongodb'); 
  }
  console.log('screenerApp : Connnected to mongodb');
  
  //Get db handler
  const db = client.db('screenerApp');
  
  //find something..
  db.collection('CompanyInfo').find().count().then((count) => {
    console.log(`screenApp : Count = ${count}`);
  }, (err) => {
    console.log('screenApp : Error during count', err);
  });
  // client.close();
});