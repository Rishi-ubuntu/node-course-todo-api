const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
     return console.log('Unable To Connect to MongoDb Server');
  }
  console.log('Connected To MongoDb Server');
//    db.collection('Todos').findOneAndUpdate({ 
//        _id: new ObjectID("5a2271ff086167bc8d2786eb")
//     }, {
//      $set: {
//          complete: true
//      }
//     }, {
//      returnOrignal: false
//    }).then((res) => {
//      console.log(res);
//    })
db.collection('Users').findOneAndUpdate({ 
    _id: new ObjectID("5a1ab81b89d9fd3c8003afd7")
 }, {
  $set: {
      name: "Suraj"
  }, $inc:{
      Age: 1
  }
 }, {
  returnOriginal: false
}).then((res) => {
  console.log(res);
})
  db.close();
});