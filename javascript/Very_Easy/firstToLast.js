//www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str, c) {
  //coding here..
  const cPositions = [];
  for (let index = 0; index < str.length; index++) {
    if (c === str[index]) cPositions.push(index);
  }
  return cPositions.length
    ? Math.max(...cPositions) - Math.min(...cPositions)
    : -1;
}

console.log(firstToLast("ababc", "a"), 2);
console.log(firstToLast("ababc", "c"), 0);
console.log(firstToLast("ababc", "d"), -1);
