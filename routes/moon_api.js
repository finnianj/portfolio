let mongoose = require("mongoose")
require('dotenv').config();

// --------- Mongo DB config -------------

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

const winnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  },
  { versionKey: false }
);

let Winner = mongoose.model('Winner', winnerSchema);

// Winner.deleteMany({}).then((res) => {
//     console.log(res)
//   }).catch((err) => {
//     console.log("Error: " + err)
// });

module.exports = function (app) {

  app.post('/winners', function(req, res) {
    console.log(req.body);
    let new_winner = new Winner({
        name: req.body.name,
        comment: req.body.comment,
        date: new Date().toLocaleString()
      });

    new_winner.save()
      .then(() => {
        Winner.find({})
        .then(data => {
          res.json(data)
        })
        .catch(err => {
          console.log(err)
          res.json(err)
        })
      })
      .catch((err) => {
        console.log("Error: " + err)
      });

  });

  app.get('/winners', function(req, res) {
    Winner.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
  })

}
