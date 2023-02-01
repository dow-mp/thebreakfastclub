/*
* Pedro Gutierrez Rincon
* 01/29/2023
* Accessing the mongodb database that is in the cloud (atlas service)
*/

const mongoose = require("mongoose");

//to connect to the mongodb database
const MONGO_URI = "mongodb+srv://PeGuRi:w8tsR5Pr0zxV@cluster0.5efdq.mongodb.net/?retryWrites=true&w=majority";

const parameters = {
  useNewUrlParser: true/*,
  useFindAndModify: true,*/
};
const errorHandeling = (e) => {
  console.log("Failure at trying to connect to Mongo Atrlas DB", e.message);
};
mongoose.connect(MONGO_URI, parameters).catch(errorHandeling);

const db = mongoose.connection;

module.exports = db;