const express = require ('express')
const app = express()
const port = 3000
const path = require('path')

let mongoose = require("mongoose")
require('dotenv').config();

const requestLogger = (req, res, next) => {
  console.log(`\n${req.method} request made to: ${req.url}\n`);
  next()
}

app.use('/', express.static('public'))
app.use(requestLogger)



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/api.html'))
})


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'))
})
app.use((req, res, next) => {
  res.status(505).sendFile(path.join(__dirname, '505.html'))
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
