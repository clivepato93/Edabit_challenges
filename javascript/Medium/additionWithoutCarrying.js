// https://codewars.com/kata/588468f3b3d02cf67b0005cd/train/javascript
function additionWithoutCarrying(a, b) {
  //coding and coding..
  let [first, second] = [String(a), String(b)];
  let max = Math.max(first.length, second.length);
  [first, second] = [first.padStart(max, 0), second.padStart(max, 0)];
  const arr = [];
  for (let i = max - 1; i >= 0; i--) {
    const res = eval(
      `${first[first.length - (1 + i)] || 0}+ ${
        second[second.length - (1 + i)] || 0
      }`
    );
    arr.push(`${res % 10}`);
  }
  return +arr.join("");
}

console.log(additionWithoutCarrying(456, 1734), 1180);

// console.log(additionWithoutCarrying(99999, 0), 99999);

// console.log(additionWithoutCarrying(999, 999), 888);

// console.log(additionWithoutCarrying(0, 0), 0);
