//www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript

var array = [2, 3, 5, 7, 11];
//refactoring
/*
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
*/

const find = (array, e) => {
  var i = array.indexOf(e);
  return i > -1 ? i : "Not found";
};

console.log(find(array, 5), 2);
console.log(find(array, 11), 4);
