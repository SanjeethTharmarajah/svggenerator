//loads required classes and imports
var expect = require("chai").expect;
const Shape = require('./shapes.js');
const ShapeSquare = require('./square.js');

describe('ShapeSquare', () => {
  // Test to verify that the Square class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Square class', () => {
      //creates new shape
      const shapesquare1 = new Shape("square","red");
      //creates new square from parent class shape
      const shapesquare2 = new ShapeSquare(shapesquare1.shape, shapesquare1.color); 
      //calls the render funtion in square class
      const results = shapesquare2.render();
      //expected svg image data string
      const expectedresults = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="200" style="fill:' + shapesquare2.color + ';" /><text font-size="48px" x="90" y="110" fill="white">ABC</text></svg>';
      //tests to see if generated svg data string is equal to expected svg image data string
      expect(results).to.be.a("string").and.equal(expectedresults);
    });
  });
});