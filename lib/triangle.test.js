//loads required classes
var expect = require("chai").expect;
const Shape = require('./shapes.js');
const ShapeTriangle = require('./triangle.js');

describe('ShapeTriangle', () => {
  // Test to verify that the Triangle class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Triangle class', () => {
      //creates a new shape
      const shapetriangle1 = new Shape("triangle","red");
      //creates a new triangle from shape class
      const shapetriangle2 = new ShapeTriangle(shapetriangle1.shape, shapetriangle1.color); 
      //calls the triangle render function
      const results = shapetriangle2.render();
      //expected string svg image data
      const expectedresults = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="200,10 300,200 100,200" style="fill:' + shapetriangle2.color + '" /><text font-size="48px" x="147" y="140" fill="white">ABC</text></svg>';
      //tests to see if generated svg image data string is equal to expected data of svg image string
      expect(results).to.be.a("string").and.equal(expectedresults);
    });
  });
});