
var Square = require('../square.js');

require('should');

describe("Square", function() {
  it("must compute the square area correctly", function() {
    var forma = new Square({ width: 100});
    var area = forma.getArea();
    /* There is a white space between consecutive columns */
    area.should.match(/^10000$/);
  })
});
