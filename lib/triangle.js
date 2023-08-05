//loads class shape
const Shapes = require('./shapes.js');
let svgstring = "";
//class triangle from parent shape class
class Triangle extends Shapes {
  constructor(shape, color) {
    super(shape, color);
  }
  //render function to render svg image data string
  render(){
        svgstring ='<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="200,10 300,200 100,200" style="fill:' + this.color + '" /><text font-size="48px" x="147" y="140" fill="white">ABC</text></svg>';
        return svgstring;
  }
}
//exports class triangle
module.exports = Triangle;
