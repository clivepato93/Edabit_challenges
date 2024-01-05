// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   const indexOf = numbers.indexOf(Math.min(...numbers));
//   return numbers.filter((el, i) => i != indexOf);
// }

// console.log(
//   removeSmallest([1, 2, 3, 4, 5]),
//   [2, 3, 4, 5],
//   "Wrong result for [1, 2, 3, 4, 5]"
// );
// console.log(
//   removeSmallest([5, 3, 2, 1, 4]),
//   [5, 3, 2, 4],
//   "Wrong result for [5, 3, 2, 1, 4]"
// );
// console.log(
//   removeSmallest([2, 2, 1, 2, 1]),
//   [2, 2, 2, 1],
//   "Wrong result for [2, 2, 1, 2, 1]"
// );
// console.log(removeSmallest([]), [], "Wrong result for []");

//www.codewars.com/kata/563ce9b8b91d25a5750000b6/train/javascript

function removeSmallest(n, arr) {
  // if (n >= arr.length) return [];
  console.log(arguments);
  const newArr = [...arr];
  while (n > 0) {
    const index = newArr.indexOf(Math.min(...newArr));
    newArr.splice(index, 1);
    n--;
    console.log(index, newArr, n);
  }
  return newArr; // fix me
}

// console.log(
//   removeSmallest(-10, [1, 2, 3, 4, 5]),
//   [1, 2, 3, 4, 5],
//   "negative numbers shouldn't change the array"
// );
// console.log(
//   removeSmallest(0, [1, 2, 3, 4, 5]),
//   [1, 2, 3, 4, 5],
//   "zero shouldn't change the array"
// );
console.log(
  removeSmallest(2, [5, 3, 2, 1, 4]),
  [5, 3, 4],
  "the order of elements should stay the same"
);
// console.log(
//   removeSmallest(3, [5, 3, 2, 1, 4]),
//   [5, 4],
//   "the order of elements should stay the same"
// );
// console.log(
//   removeSmallest(3, [1, 2, 3, 4, 5]),
//   [4, 5],
//   "the order of elements should stay the same"
// );
// console.log(
//   removeSmallest(5, [1, 2, 3, 4, 5]),
//   [],
//   "you might have to return the empty array"
// );
// console.log(
//   removeSmallest(9, [1, 2, 3, 4, 5]),
//   [],
//   "if n is larger then arr.length, return []"
// );
