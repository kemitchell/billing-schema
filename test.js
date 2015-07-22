var tv4 = require('tv4')

var schema = require('./')

require('tape')(function(test) {

  test.deepEqual(
    tv4.validateMultiple(require('./time-example'), schema),
    { "errors": [], "missing": [], "valid": true },
    "validates time example")

  test.deepEqual(
    tv4.validateMultiple(require('./estimate-example'), schema),
    { "errors": [], "missing": [], "valid": true },
    "validates estimate example")

  test.end() })
