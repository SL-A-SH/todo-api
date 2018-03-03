const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'New Todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));

  // });

  db.collection('Users').insertOne({
    name: 'Aqeeb Rizwan',
    age: 23,
    location: 'Chennai'
  }, (err, result) => {
    if (err) {
      console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});