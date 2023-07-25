// https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
// arrays
function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}

//www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript

Array.range = function (start, count) {
  return Array.from({ length: count }, (_, i) => start + i);
};

Array.prototype.sum = function () {
  let num = 0;
  for (let i = 0; i < this.length; i++) {
    num += this[i];
  }
  return num;
};
