// https://www.codewars.com/kata/5856c5f7f37aeceaa100008e/train/javascript

function baublesOnTree(baubles, branches) {
  // your solution
  if (!branches) return "Grandma, we will have to buy a Christmas tree first!";
  const arr = [];
  let branchesLeft = branches;
  while (branchesLeft > 0) {
    const result = Math.ceil(baubles / branchesLeft);
    baubles -= result;
    --branchesLeft;
    arr.push(result);
  }

  return arr;
}

// console.log(baublesOnTree(5, 5), [1, 1, 1, 1, 1]);
// console.log(
//   baublesOnTree(5, 0),
//   "Grandma, we will have to buy a Christmas tree first!"
// );
console.log(baublesOnTree(6, 5), [2, 1, 1, 1, 1]);
// console.log(baublesOnTree(50, 9), [6, 6, 6, 6, 6, 5, 5, 5, 5]);
// console.log(baublesOnTree(20, 4), [5, 5, 5, 5]);
// console.log(baublesOnTree(0, 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
