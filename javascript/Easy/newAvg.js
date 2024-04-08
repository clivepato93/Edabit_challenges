// https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/javascript

function newAvg(arr, newavg) {
  // your code
  let x = newavg * arr.length + 1;
  for (let i = 0; i < arr.length; i++) {
    x -= arr[i];
  }
  if (x <= 0) {
    throw Error("Invalid");
  }
  return Math.ceil(x + newavg - 1);
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);
