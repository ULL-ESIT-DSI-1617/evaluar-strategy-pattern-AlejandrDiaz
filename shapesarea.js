class shape {

  constructor(options) {
    Object.assign(this, options)
  }

  getArea(){

    let forma = new shape.shapes[this.constructor.name](this);
    let area = forma.getArea();
    return area;
  }
}


shape.shapes = shape.shapes || {};
module.exports = {
  shape:shape
}



/*
module.exports = function(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle':
      area = .5 * options.width * options.height;
      break;

    case 'Square':
      area = Math.pow(options.width, 2);
      break;

    case 'Rectangle':
      area = options.width * options.height;
      break;

    default:
      throw new Error('Invalid shape: ' + shape);
  }

  return area;
}
*/
