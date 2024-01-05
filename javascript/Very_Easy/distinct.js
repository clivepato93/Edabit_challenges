// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
