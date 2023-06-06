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
  comments: [String]
});

let Song = mongoose.model('Song', songSchema);


module.exports = function (app) {

  app.post('/api/song', function(req, res) {
    console.log(req.body);
    res.json("yo")
    // let new_song = new Song({
    //     username: req.body.username,
    //   });

    // new_user.save()
    //   .then((data) => {
    //       console.log("Created user: " + data)
    //       res.json({ username: data.username, _id: data._id });
    //   })
    //   .catch((err) => {
    //     console.log("Error: " + err)
    //   });


  });

}
