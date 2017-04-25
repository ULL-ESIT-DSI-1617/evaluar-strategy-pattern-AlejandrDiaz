var shape = require('./shapesarea.js');


class rectangle extends shape {
  constructor(options){
    super(options);

  }


   getArea(){

      return this.width * this.height;
   }


}


shape.shapes.rectangle = rectangle;

module.exports = rectangle;
