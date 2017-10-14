'use strict';

var expect = require('chai').expect;
var decodeFirebasePushID = require('../index');

describe('#decodeFirebasePushID', function() {
  var firebasePushID = '-KwKoJBVZO4fJt2_6vgJ'
  var timestamp = 1507899556640

  it('should convert correct timestamp', function() {
    var result = decodeFirebasePushID(firebasePushID);
    expect(result.timestamp).to.equal(timestamp);
  });
});