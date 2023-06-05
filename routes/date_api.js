const convertDate = (date) => {

  const regexone = /^\d{4}-\d{2}-\d{2}$/
  const regextwo = /^\d+$/
  let utc = "";
  let unix= "";
  // clearing variables from previous search

  if (regexone.test(date)) {
    unix = Date.parse(date);
    utc = new Date(date).toGMTString();
  } else if (regextwo.test(date)) {
    console.log("test 2 passed")
    unix = parseInt(date, 10);
    console.log(typeof date)
    utc = new Date(parseInt(date, 10)).toGMTString();
    console.log("utc " + utc)
  } else if (typeof new Date(date) == "object" ) {
    utc = new Date(date).toGMTString()
    unix = Date.parse(date)
    console.log("object")
  } else {
    return "Invalid"
  }
  console.log("final returning " + utc + " and " + unix)
  return [utc, unix];

}

module.exports = function(app) {
  app.get("/api/date", function(req, res, next) {
    // calling api path returns current date and time
    return res.json({ "unix": Date.now(), "utc": new Date(Date.now()).toGMTString() })
    next();
  })

  app.get("/api/date/:date", function(req, res, next) {
    console.log(req.params);
    let conversion = convertDate(req.params.date)
    if (conversion[0] == "I" || conversion[0] == "Invalid Date") {
      return res.json({ "error": "Invalid date"} )
    }
    return res.json({ "unix": conversion[1], "utc": conversion[0] })
    next();
  })
}
