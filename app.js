import express from 'express';
const app = express()
const port = 3000
import path from 'path';
import userAPIRoutes from './routes/user_api.js';
import dateAPIRoutes from './routes/date_api.js';
import converterAPIRoutes from './routes/converter_api.js';
import pgAPIRoutes from './routes/postgres_api.js';
import handler from './database/controller.js'


import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';


  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static('public', {
      maxAge: '300000',
      etag: true,
      lastModified: true 
    }))

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/ocean.html'))
    })
    app.get('/simple', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/simple.html'))
    })
    app.get('/myapi', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/myapi.html'))
    })


    userAPIRoutes(app);
    dateAPIRoutes(app);
    converterAPIRoutes(app);
    pgAPIRoutes(app)



    app.use((req, res, next) => {
      res.status(404).sendFile(path.join(__dirname, '404.html'))
    })
    app.use((req, res, next) => {
      res.status(505).sendFile(path.join(__dirname, '505.html'))
    })


    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    })

export default app
