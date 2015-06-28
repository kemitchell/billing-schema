var tv4 = require('tv4')

require('tape')(function(test) {

  test.deepEqual(
    tv4.validateMultiple(
      require('./hourly-example'),
      require('./schema')),
    { "errors": [],
      "missing": [],
      "valid": true },
    "validates hourly example")

  test.deepEqual(
    tv4.validateMultiple(
      require('./estimate-example'),
      require('./schema')),
    { "errors": [],
      "missing": [],
      "valid": true },
    "validates estimate example")

  test.end() })
