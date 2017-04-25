var shape = require('./shapesarea.js');


class triangle extends shape {
  constructor(options){
    super(options);

  }


   getArea(){

      return 0.5 * this.width * this.height;
   }


}


shape.shapes.triangle = triangle;

module.exports = {
  triangle:triangle
}
