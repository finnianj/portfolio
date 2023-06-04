const express = require ('express')
const app = express()
const port = 3000
const path = require('path')

const requestLogger = (req, res, next) => {
  console.log(`\n${req.method} request made to: ${req.url}\n`);
  next()
}

app.use('/', express.static('public'))
app.use(requestLogger)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
