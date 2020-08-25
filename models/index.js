const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:<password>@cluster0-lfzvm.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
