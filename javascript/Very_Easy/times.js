// https://www.codewars.com/kata/56e6a330715e7221d9000a3b/train/javascript
//Prototype
Number.prototype.times = function (f) {
  // Go ahead and define :)
  for (i = 0; i < this; i++) {
    f(i);
  }
};
