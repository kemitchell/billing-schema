require('tape')(function(test) {
  test.deepEqual(
    require('tv4')
      .validateMultiple(
        require('./example'),
        require('./schema')),
    { "errors": [],
      "missing": [],
      "valid": true },
    "validates example")
  test.end() })
