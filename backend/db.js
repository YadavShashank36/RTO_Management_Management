const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/"
const dbName='test'
main().catch(err => console.log(err));

const connectToMongo= ()=>{
 mongoose.connect(mongoURI, ()=>{
    console.log("connected")
 })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectToMongo
//mongodb://localhost:27017,localhost:27018/