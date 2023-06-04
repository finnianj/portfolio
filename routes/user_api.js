module.exports = function(app) {
  app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'Hello from Finn\'s API' });
  });

  app.get('/api/whoami', function (req, res) {
    console.log(req.headers)
    res.json({ "ipaddress": req.ip, "language": req.get('Accept-Language'), "software": req.headers['user-agent']  });
  });
}
