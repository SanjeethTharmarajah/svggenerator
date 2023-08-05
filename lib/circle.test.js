//defines global variables 
var expect = require("chai").expect;
const Shape = require('./shapes.js');
const ShapeCircle = require('./circle.js');

describe('ShapeCircle', () => {
  // Test to verify that the Circle class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Circle class', () => {
      //created new shape
      const shapecircle1 = new Shape("circle","red");
      //creates new circle from shpae class
      const shapecircle2 = new ShapeCircle(shapecircle1.shape, shapecircle1.color); 
      //renders circle svg image string for output
      const results = shapecircle2.render();
      //expected output string
      const expectedresults = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="100" cy="100" r="90" fill="'+ shapecircle2.color + '" /><text font-size="48px" x="55" y="110" fill="white">ABC</text></svg>';
      //tests expected output string with generated string image svg data
      expect(results).to.be.a("string").and.equal(expectedresults);
    });
  });
});