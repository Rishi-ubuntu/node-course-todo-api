const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todos');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

 Todo.findOneAndRemove({_id: '5a27f1527f19a78dde04d0ad'}).then((doc) => {
     console.log(doc);
 })
//  Todo.findByIdAndRemove('5a27f1527f19a78dde04d0ad').then((todo) => {
//      console.log(todo);
//  });