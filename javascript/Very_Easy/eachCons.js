//www.codewars.com/kata/545af3d185166a3dec001190/train/javascript

function eachCons(array, n) {
  return array
    .map((num, i) => [...array.slice(i, i + n)])
    .filter((arr) => arr.length === n);
}

function eachCons(array, n) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i + n > array.length) {
      break;
    } else {
      newArr.push([...array.slice(i, i + n)]);
    }
  }
  return newArr;
}

const lst = [3, 5, 8, 13];

console.log(eachCons(lst, 1), [[3], [5], [8], [13]]);

console.log(eachCons(lst, 2), [
  [3, 5],
  [5, 8],
  [8, 13],
]);

console.log(eachCons(lst, 3), [
  [3, 5, 8],
  [5, 8, 13],
]);
console.log(eachCons([], 3), []);
