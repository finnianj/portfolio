function ConvertHandler() {

  this.getNum = function(input) {
    let test = input.match(/mi$|kg$|gal$|l$|km$|lbs$/i)
    if (test != null) {
      let index = test.index;
      input = input.split('')
      let unit = input.slice(index).join('').toLowerCase()
      if (unit == 'l') unit = 'L'
      let num = input.slice(0, index).join('')

      if (num == 0) {
        return [ 1, unit]
      } else if (isGoodNum(num) == false) {
        console.log("Bad num")
        return 'invalid number'
      } else {
        return [ eval(num), unit];
      }

    } else {
      input = input.slice(0, input.match(/[a-z]/).index)
      if (isGoodNum(input) == false) {
        return 'invalid number and unit'
      }
      return "invalid unit"
    }
  };

  function isGoodNum(str) {
    return /^\+?(0|[1-9])\d*(\.\d+|\/\d+|\.\d+\/\d+|\/\d+\.\d+)?$/.test(str);
  }

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case 'kg':
        return "kilograms"
      case 'gal':
        return "gallons"
      case 'L':
        return "litres"
      case 'mi':
        return "miles"
      case 'km':
        return "kilometers"
      case 'lbs':
        return "pounds"
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    // initNum = parseInt(initNum, 10)
    console.log(initNum)
    console.log(typeof initNum)
    switch (initUnit) {
      case 'kg':
        result = [initNum / lbsToKg, "lbs"]
        break;
      case 'gal':
        result = [initNum * galToL, "L"]
        break;
      case 'L':
        result = [initNum / galToL, "gal"]
        break;
      case 'mi':
        result = [initNum * miToKm, "km"]
        break;
      case 'km':
        result = [initNum / miToKm, "mi"]
        break;
      case 'lbs':
        result = [initNum * lbsToKg, "kg"]
        break;
      default:
        console.log("Invalid metric")
        result = "Invalid metric"
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    initUnit = this.spellOutUnit(initUnit);
    returnUnit = this.spellOutUnit(returnUnit)
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    return result;
  };


}

module.exports = ConvertHandler;
