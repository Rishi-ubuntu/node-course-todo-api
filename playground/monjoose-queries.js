const { mongoose } = require('../server/db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('../server/models/todos');
const { User } = require('../server/models/user');
 
var id = '5a22a1e345436228ead5e974';

if (!ObjectID.isValid(id)) {
   return console.log('Id not valid');
}

// Todo.find({
//     _id: id,
// }).then((todos) => {
//     console.log('Todos',todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) =>{
//     if (!todo) {
//         return console.log("Id not Found");
//     }
//      console.log('Todo by id', todo)
// });

User.findById(id).then((user) => {
   if(!user) {
       return console.log('User Not Found');
   }
    console.log(user)
});