const express = require ('express')
const app = express()
const port = 3000
const path = require('path')
const songAPIRoutes = require('./routes/song_api.js');
const userAPIRoutes = require('./routes/user_api.js');
const dateAPIRoutes = require('./routes/date_api.js');
const converterAPIRoutes = require('./routes/converter_api.js')
const moonAPIRoutes = require('./routes/moon_api.js')

var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static('public'))
  app.use(express.static('bundled'))

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/bundled/index.html'))
  })
  app.get('/simple', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/simple.html'))
  })
  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/api.html'))
  })


  songAPIRoutes(app);
  userAPIRoutes(app);
  dateAPIRoutes(app);
  converterAPIRoutes(app);
  moonAPIRoutes(app);



  app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
  })
  app.use((req, res, next) => {
    res.status(505).sendFile(path.join(__dirname, '505.html'))
  })


  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  })
