// https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e/train/javascript
function arrayDepth(array, val = []) {
  //   console.log(array);
  debugger;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
    const arr = array.slice(0, i + 1).filter((val) => typeof val == "object");
    console.log(arr);
    if (arr.length == 1) {
      //   console.log(i, arr);
      val.push(1);
    }
    if (Array.isArray(element)) {
      arrayDepth(element, val);
    }
  }
  // return sum.reduce((t, c) => t + c, 0);
  return val.reduce((t, c) => t + c, 1);
}
// console.log(arrayDepth([[], [], [[], []]]), 3);
// console.log(arrayDepth([true]), 1);
// console.log(arrayDepth([]), 1);
// console.log(arrayDepth([2, "yes", [true, false]]), 2);
// console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]), 6);
console.log(arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]), 2);
