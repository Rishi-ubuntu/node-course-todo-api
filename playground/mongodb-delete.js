const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
     return console.log('Unable To Connect to MongoDb Server');
  }
  console.log('Connected To MongoDb Server');
  //delete many
//   db.collection("Todos").deleteMany({ text: "Eat lunch" }).then((result) => {
//     console.log(result);
//   })
//deleteOne
// db.collection("Todos").deleteOne({ text: "Eat lunch" }).then((res) => {
//     console.log(res);
// });
//findOneandDelete
// db.collection("Todos").findOneAndDelete({ complete: false }).then((res) => {
//     console.log(res);
// });
// db.collection("Users").deleteMany({ name: "Rohit" }).then((res) => {
//     console.log(res);
// });
db.collection("Users").findOneAndDelete({ _id: new ObjectID("5a1ab7d486c6753c62ac1d1b") }).then((res) => {
    console.log(res);
});
  db.close();
});