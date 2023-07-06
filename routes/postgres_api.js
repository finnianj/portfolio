import Handler from '../database/controller.js'


export default function (app) {

  let handler = new Handler();

  app.get('/myapi/song', (req, res) => {
    handler.getAllSongs(req, res)
  })

  app.post('/myapi/song', (req, res) => {
    handler.postSong(req, res)
  })

  app.get('/myapi/winners', (req, res) => {
    handler.getAllWinners(req, res)
  })

  app.post('/myapi/supersecretpath', (req, res) => {
    handler.postWinner(req, res)
  })


}
