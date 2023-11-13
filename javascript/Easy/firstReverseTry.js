// https://www.codewars.com/kata/5886c6b2f3b6ae33dd0000be/train/javascript

function firstReverseTry(arr) {
  //coding and coding..
  //   swapping array values
  if (!arr.length) {
    return arr;
  }
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

console.log(firstReverseTry([1, 2, 3, 4, 5]), [5, 2, 3, 4, 1]);

console.log(firstReverseTry([]), []);

console.log(firstReverseTry([111]), [111]);

console.log(
  firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]),
  [324, 54, 12, 3, 4, 56, 23, 12, 5, 23]
);

console.log(firstReverseTry([-1, 1]), [1, -1]);
