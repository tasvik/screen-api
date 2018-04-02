const {MongoClient, ObjectId} = require('mongodb');

//connect to db
MongoClient.connect('mongodb://localhost:27017/screenerApp', (err,client) => {
  if(err) { 
    return console.log('screenerApp : Unable to connect to mongodb'); 
  }
  console.log('screenerApp : Connnected to mongodb');
  
  //Get db handler
  const db = client.db('screenerApp');
  
  db.collection('CompanyInfo').insertOne(
    {
        "ISIN Number": "GB0001411924",
        "name": "SKY PLC\r\n",
        "URL": "http://www.sky.com/corporate",
        "LSEURL": [
          "http://www.londonstockexchange.com/exchange/prices/stocks/summary/fundamentals.html?fourWayKey=GB0001411924GBGBXSET1"
        ],
        "Address": "7 Centaurs Business Centre, Grant Way, Isleworth, TW7 5QD, United Kingdom",
        "Market cap": "£ 22,304.25",
        "Listing": "15 Dec 1994",
        "Trading service": "SETS",
        "Market": "Main Market",
        "Listing Category": "Premium Equity Commercial Companies",
        "Sector": "Media",
        "Sub sector": "Broadcasting & Entertainment",
        "Country": "GB",
        "MiFiD Status": "Regulated Market",
        "Exchange Market Size": "2,000",
        "SEDOL": "0141192"
      },
    (err, result) => {
      if(err) { 
        return console.log('screenerApp : Unable to connect to CompanyInfo'); 
      }
      
      console.log(JSON.stringify(result.ops, undefined,2));
  });
  
  client.close();
});