let mongoose = require("mongoose")
require('dotenv').config();

// --------- Mongo DB config -------------

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   comments: [String]
// });

// let Book = mongoose.model('Book', bookSchema);


module.exports = function (app) {}
