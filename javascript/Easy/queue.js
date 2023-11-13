// https://www.codewars.com/kata/5b538734beb8654d6b00016d/train/javascript
function queue(queuers, pos) {
  //your code here
  let minutes = 0;
  while (true) {
    ++minutes;
    --queuers[0];
    if (queuers[pos] == 0) {
      break;
    }
    if (pos == 0) {
      pos = queuers.length - 1;
    } else if (pos !== 0) {
      --pos;
    }
    if (queuers[0] === 0) {
      queuers = [...queuers.slice(1)];
    } else if ((queuers[0] === 0) !== 0) {
      queuers = [...queuers.slice(1), queuers.shift()];
    }
  }

  return minutes;
}

console.log(queue([2, 5, 3, 6, 4], 0), 6);
// console.log(queue([2, 5, 3, 6, 4], 1), 18);
// console.log(queue([2, 5, 3, 6, 4], 2), 12);
// console.log(queue([2, 5, 3, 6, 4], 3), 20);
// console.log(queue([2, 5, 3, 6, 4], 4), 17);
