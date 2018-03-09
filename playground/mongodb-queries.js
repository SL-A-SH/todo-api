const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5a9bac0f364f4322c89d3791';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo By Id', todo);
// });

var id = '5a9a88705f06932cf8f4afc9';

User.findById(id).then((user) => {
  if (!user) return console.log('User not found')
  console.log('User', user);
}).catch((e) => console.log(e));