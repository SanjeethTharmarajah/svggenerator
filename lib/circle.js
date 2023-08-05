//loads global variables
const Shapes = require('./shapes.js');
let svgstring = "";
//creates a class for circle child class from parent shapes class
class Circle extends Shapes {
  constructor(shape, color) {
    super(shape, color);
  }
  //funtion that renders svg image data string
  render(){
        svgstring ='<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="100" cy="100" r="90" fill="'+ this.color + '" /><text font-size="48px" x="55" y="110" fill="white">ABC</text></svg>';
        return svgstring;
  }
}
//exports circle class
module.exports = Circle;
