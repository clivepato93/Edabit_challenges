// https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript

function group(arr) {
  const newArr = [];
  const obj = {};
  for (let index = 0; index < arr.length; index++) {
    debugger;
    const element = arr[index];
    if (element in obj == false) {
      obj[element] = newArr.length;
      newArr[newArr.length] = [];
      newArr[obj[element]].push(element);
    } else {
      newArr[obj[element]].push(element);
    }
    console.log(newArr);
  }
  return newArr;
}

console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
// console.log(group([3, 2, 6, 2]), [[3], [2, 2], [6]]);
