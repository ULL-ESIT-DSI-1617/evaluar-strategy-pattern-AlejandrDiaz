"use strict";
var getArea = require('./shapesarea.js');

require('./rectangle.js');
require('./square.js');
require('./triangle.js');
try {
  var t = new getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = new getArea('Square',    { width: 100 });
  console.log(s);
  var r = new getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  var b = new getArea('Bogus');
}
catch (e) {
  console.log(e);
}
