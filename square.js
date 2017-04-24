(function(export) {

(function(shapes) {
  var Square = shapes.Square = function(options) {
    this.width = options.width;
  };
  Square.prototype.getArea = function() {
    return Math.pow(options.width, 2);
  };
}(window.shapes = window.shapes || {}));

})(this);
