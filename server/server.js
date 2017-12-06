var {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todos');
var { User } = require('./models/user');
const port = process.env.PORT || 3000;


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo ({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
  // var user = new User({
  //   email: req.body.email
  // });
  // user.save().then((doc) => {
  //   res.send(doc);
  // },(e) => {
  //   res.status(400).send(e);
  // });
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
      res.send({ todos })
   }, (e) => {
   res.status(400).send(e)
   })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //validate id 
   if(!ObjectID.isValid(id)) {
     return res.status(404).send();
   }
   Todo.findById(id).then((todo) => {
     if(todo) {
      res.send({todo})
     }
     res.status(404).send();
   }).catch((e) => {
      res.status(400).send();
   });

});

app.delete('/todos/:id', (req,res) => {
  //get the id
  var id = req.params.id;
  //validate the id -> not valid return 404
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  //remove todo by id
     Todo.findByIdAndRemove(id).then((doc) => {
         if(!doc) {
            //error
        //400 with empty body
        return  res.status(404).send();
       }
       //success
      //if no doc send 404 else send doc with 200
         
        res.status(200).send(doc);
     }).catch((e) => res.status(400).send())
    
    
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };