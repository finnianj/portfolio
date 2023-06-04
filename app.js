const express = require ('express')
const app = express()
const port = 3000

app.use()

app.get('/', (req, res) => {
  res.send('Goodbye World')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
