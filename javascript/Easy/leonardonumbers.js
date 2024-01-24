// https://www.codewars.com/kata/5b2117eea454c89d4400005f/train/javascript
//  Leonardo numbers
L = (n, L0, L1, add) => {
  // return what you are told....
  const arr = [L0, L1];
  while (arr.length != n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2] + add);
  }
  return arr;
};

console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
