const ConvertHandler = require('../controllers/convert_handler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/converter', (req, res) => {
    let input = convertHandler.getNum(req.query.value)

    if (input == "invalid unit") {
      console.log("invalid unit")
      res.json("invalid unit. You must use mi, km, lbs, kg, l or gal")
    } else if (input == 'invalid number') {
      console.log("invalid number")
      res.json("invalid number")
    } else if (input == 'invalid number and unit') {
      console.log("invalid number and unit")
      res.json("invalid number and unit")
    } else {
      let converted = convertHandler.convert(input[0], input[1])
      console.log(converted)
      let rounded = Math.round(converted[0] * 100_000) / 100_000
      console.log(rounded)

      let string = convertHandler.getString(input[0], input[1], rounded, converted[1])
      let json_result = {
        Number: input[0],
        Unit: input[1],
        returnNumber: rounded,
        returnUnit: converted[1],
        Response: string
      }
      res.json(json_result)
    }
  })

};
