//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (error, db) => {
  if (error) {
     return console.log('Unable To Connect to MongoDb Server');
  }
  console.log('Connected To MongoDb Server');
  //  db.collection('Users').find({
  //    name: "Rohit" 
  //   }).toArray().then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //  }, (err) => {
  //      console.log('Unable to fetch todos', err);
  //  });
//   db.collection('Users').find({ name: "Rohit" }).count().then((count) => {
//     console.log(`Total = ${count}`);
//  }, (err) => {
//      console.log('Unable to fetch todos', err);
//  });
db.collection('todos').find({ completed: true }).toArray().then((docs) => {
  console.log("todos")
   console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch todos', err);
});
db.collection('todos').find({ completed: true }).count().then((count) => {
  console.log(`Total = ${count}`);
}, (err) => {
   console.log('Unable to fetch todos', err);
});
  db.close();
});