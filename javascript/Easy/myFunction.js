// https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript

// Debugging //OOP
// original code
/*
function myFunction() {
  var MyObject = {
    objProperty: "string"
    objMethod: function() {
      return myObject.objProperty;
		}
  }
  
  return myObject.Objmethod();
};
*/

function myFunction() {
  return {
    objProperty: "string",
    objMethod: function () {
      return this.objProperty;
    },
  };
}
