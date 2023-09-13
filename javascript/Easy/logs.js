// https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript

function logs(x, a, b) {
  //your code here
  return Math.log(a * b) / Math.log(x);
}

console.log(logs(10, 2, 3), 0.7781512503836435);
console.log(logs(5, 2, 3), 1.1132827525593785);
console.log(logs(1000, 2, 3), 0.25938375012788123);
