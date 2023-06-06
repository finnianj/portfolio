let mongoose = require("mongoose")
require('dotenv').config();

// --------- Mongo DB config -------------

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  submitted_by: {
    type: String,
    required: true
  },
  date_submitted: {type: Date, default: new Date()},
  comment: {
    type: String,
    required: true
  }
});

let Song = mongoose.model('Song', songSchema);

// Song.deleteMany({}).then((res) => {
//     //if succeded do this block of code
//     console.log(res)
//   }).catch((err) => {
//     console.log("Error: " + err)
// });


module.exports = function (app) {

  app.post('/api/song', function(req, res) {
    console.log(req.body);
    let new_song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        submitted_by: req.body.submitted_by,
        comment: req.body.comment
      });

    new_song.save()
      .then((data) => {
          console.log("Created song: " + data)
          res.json({
            title: data.title,
            artist: data.artist,
            submitted_by: data.submitted_by,
            comment: data.comment,
            date_submitted: data.date_submitted.toLocaleString(),
            _id: data._id
          });
      })
      .catch((err) => {
        console.log("Error: " + err)
      });

  });

  app.get('/api/song', function(req, res) {
    Song.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
  })

}
