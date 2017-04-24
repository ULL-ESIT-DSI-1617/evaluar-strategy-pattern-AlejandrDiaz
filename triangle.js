(function(export) {

(function(shapes) {
  var Triangle = shapes.Triangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };
  Triangle.prototype.getArea = function() {
    return 0.5 * this.width * this.height;
  };
}(window.shapes = window.shapes || {}));

})(this);
