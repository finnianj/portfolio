export default function(app) {
  app.get('/myapi/hello', function (req, res) {
    res.json({ greeting: 'Hello from Finn\'s API' });
  });

  app.get('/myapi/whoami', function (req, res) {
    const clientIP = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({ "ipaddress": clientIP, "language": req.get('Accept-Language'), "software": req.headers['user-agent'] });
  });
}
