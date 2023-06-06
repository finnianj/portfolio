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
  username: {
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


module.exports = function (app) {

  app.post('/api/song', function(req, res) {
    console.log(req.body);
    let new_song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        username: req.body.username,
        comment: req.body.comment
      });

    new_song.save()
      .then((data) => {
          console.log("Created song: " + data)
          res.json({
            title: data.title,
            artist: data.artist,
            submitted_by: data.username,
            comment: data.comment,
            date_submitted: data.date_submitted.toLocaleString(),
            _id: data._id
          });
      })
      .catch((err) => {
        console.log("Error: " + err)
      });


  });

}
