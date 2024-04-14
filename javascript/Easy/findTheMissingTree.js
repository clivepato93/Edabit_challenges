// https://www.codewars.com/kata/58aa8698ae929e1c830001c7/train/javascript

function findTheMissingTree(trees) {
  //coding and coding..

  const obj = {};
  for (let i = 0; i < trees.length; i++) {
    let num = trees[i];
    if (num in obj) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  }

  let min;
  debugger;
  for (const key in obj) {
    if (!min) {
      min = key;
    } else if (obj[min] > obj[key]) {
      min = key;
    }
  }
  return +min;
}

console.log(findTheMissingTree([1, 2, 2, 3, 3]), 1);

// console.log(findTheMissingTree([11, 2, 3, 3, 3, 11, 2, 2]), 11);

console.log(
  findTheMissingTree([
    234, 76, 45, 99, 99, 99, 99, 45, 234, 234, 45, 45, 76, 234, 76,
  ]),
  76
);

console.log(
  findTheMissingTree([
    1, 1, 1, 1, 1, 1, 1, 22, 22, 22, 22, 22, 22, 22, 3, 3, 3, 3, 3, 3,
  ]),
  3
);

console.log(findTheMissingTree([10, 205, 3000, 3000, 10]), 205);

console.log(
  findTheMissingTree([
    50, 408, 50, 50, 50, 50, 408, 408, 408, 680, 408, 680, 50, 408, 680, 50, 50,
    680, 408, 680, 50, 680, 680, 408, 408, 50, 50, 408, 50, 50, 50, 50, 680,
    408, 680, 50, 680, 408, 680, 408, 680, 50, 50, 50, 680, 50, 680, 408, 680,
    680, 680, 408, 408, 408, 408, 680, 680, 50, 408, 408, 408, 50, 408, 408, 50,
    680, 680, 680, 50, 680, 680, 680, 50, 680, 408, 50, 50, 408, 50, 408, 680,
    408, 50, 680, 680, 408, 408, 680, 408,
  ]),
  50
);
