(function(export) {

(function(shapes) {
  var Rectangle = shapes.Rectangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };
  Rectangle.prototype.getArea = function() {
    return options.width * options.height;
  };
}(window.shapes = window.shapes || {}));

})(this);
