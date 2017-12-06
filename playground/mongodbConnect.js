//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
     return console.log('Unable To Connect to MongoDb Server');
  }
  console.log('Connected To MongoDb Server');
  db.collection('Todos').insertOne({
    text: 'Something to do',
    complete: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
    console.log(result.ops[0]._id.getTimestamp().toString())
  });


// db.collection('Users').insertOne({
//   name: 'Rohit',
//   Age: 25,
//   location: 'Shillong'
// }, (err, res) => {
//   if (err) {
//    return console.log('Unable to insert User', err);
//   }
//  
// });
  db.close();
});