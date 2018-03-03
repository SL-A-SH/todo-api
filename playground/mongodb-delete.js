// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').deleteMany({name: 'Aqeeb Rizwan'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: ObjectID('5a9a4525fd8bde36ad3a9f91')}).then((result) => {
    console.log(result);
  });

  // client.close();
});