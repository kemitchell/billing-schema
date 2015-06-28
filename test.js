var tv4 = require('tv4')

var schema = require('./schema')

require('tape')(function(test) {

  test.deepEqual(
    tv4.validateMultiple(require('./hourly-example'), schema),
    { "errors": [], "missing": [], "valid": true },
    "validates hourly example")

  test.deepEqual(
    tv4.validateMultiple(require('./estimate-example'), schema),
    { "errors": [], "missing": [], "valid": true },
    "validates estimate example")

  test.end() })
