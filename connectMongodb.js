const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection urlObj
const urlMongo = 'mongodb://localhost:27017';

// Database Name
var DBName = 'PatientRecord';

// connect to DB
MongoClient.connect(urlMongo, function(err, dbConn) {

  assert.equal(null, err);
  console.log('Connected to mongodb');
  const connDBName = dbConn.db(DBName);
  insertMultipleRecord(connDBName, function(resultVar) {
    console.log("printing result variable");
    console.log(resultVar);

  });

  findDocumentsDB(connDBName, function(dbDocs){
    console.log('Docs output');
    console.log(dbDocs);
  })
  dbConn.close();
});



// API to insert to my Database
var insertMultipleRecord = function(db, callback) {

  const dbCollection = db.collection('documents');
  dbCollection.insertMany(
    [
      {1:"PatientA"},
      {2:"PatientB"},
      {3:"PatientC"},
      {4:"PatientD"}
    ],
    function(err, insertResult) {
      assert.equal(null, err);
      assert.equal(insertResult.result.n, 4);
      assert.equal(insertResult.ops.length, 4);
      console.log("Inserted 4 documents using collection.insertMany fcn");
      callback(insertResult);  //issuing callback fcn and passing result var
    } // insert callback result
  ); // collection.insertMany
} // end of insertMultipleRecord()


// findDocumentsDB
var findDocumentsDB = function(db, callback) {
  const dbCollection = db.collection('documents');
  dbCollection.find({}).toArray(function(err, dbDocs){
    assert.equal(null, err);
    callback(dbDocs);
  });
}
