var shape = require('./shapesarea.js');


class square extends shape {
  constructor(options){
    super(options);

  }


   getArea(){

      return Math.pow(this.width, 2);
   }


}


shape.shapes.square = square;

module.exports = {
  square:square
}
