//loads shapes class
const Shapes = require('./shapes.js');
let svgstring = "";
//class square is created based on parent shape class
class Square extends Shapes {
  constructor(shape, color) {
    super(shape, color);
  }
  //function that renders svg image data string for square class
  render(){
        svgstring ='<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="200" style="fill:' + this.color + ';" /><text font-size="48px" x="90" y="110" fill="white">ABC</text></svg>';
        return svgstring;
  }
}
//exports square class
module.exports = Square;
