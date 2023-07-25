// https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/train/javascript

function unflatten(flatArray) {
  const newArr = [];
  for (let i = 0; i < flatArray.length; i++) {
    const num = flatArray[i];
    if (num <= 2) newArr.push(num);
    else {
      newArr.push([...flatArray.slice(i, i + num)]);
      i += num - 1;
    }
  }
  return newArr;
}
// console.log(unflatten([3, 5, 2, 1]), [[3, 5, 2], 1]);
console.log(unflatten([1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3]), [
  1,
  [4, 5, 2, 1],
  2,
  [4, 5, 2, 6],
  2,
  [3, 3],
]);
