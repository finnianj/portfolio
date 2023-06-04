const express = require ('express')
const app = express()
const port = 3000

const requestLogger = (req, res, next) => {
  console.log(`\n${req.method} request made to: ${req.url}\n`);
  next()
}

app.use('/', express.static('public'))
app.use(requestLogger)

app.get('/', (req, res) => {
  res.render('views/index.html')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
