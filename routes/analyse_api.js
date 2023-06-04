module.exports = function(app) {
  app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
    res.json({ name: req.file.originalname, type: req.file.mimetype, size: `${req.file.size} bytes`})
  })
}
