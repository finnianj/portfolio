const express = require ('express')
const app = express()
const port = 3000
const path = require('path')
const songAPIRoutes = require('./routes/song_api.js');
const userAPIRoutes = require('./routes/user_api.js');
const dateAPIRoutes = require('./routes/date_api.js');
const converterAPIRoutes = require('./routes/converter_api.js')

var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const requestLogger = (req, res, next) => {
    console.log(`\n${req.method} request made to: ${req.url}\n`);
    next()
  }

//if node_env dev then use unbundled files

  app.use(express.static('public'))

  // for production:
  // app.use('/galaxy', express.static('public/bundled'))

  // for development
  app.use('/galaxy', express.static('galaxy'))

  // for import maps
  // app.use('/galaxy', express.static('importmapgalaxy'))
  
  app.use(express.static('javascript'))
  app.use(requestLogger)



  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
  })
  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/api.html'))
  })
  app.get('/galaxy', (req, res) => {
    res.sendFile(path.join(__dirname, '/importmapgalaxy/importmap.html'))
    // res.sendFile(path.join(__dirname, '/public/bundled/index.html'))
  })

  songAPIRoutes(app);
  userAPIRoutes(app);
  dateAPIRoutes(app);
  converterAPIRoutes(app);

  app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
  })
  app.use((req, res, next) => {
    res.status(505).sendFile(path.join(__dirname, '505.html'))
  })


  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  })
