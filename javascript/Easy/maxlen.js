// https://www.codewars.com/kata/57c1f22d8fbb9fd88700009b/train/javascript

function maxlen(l1, l2) {
  // return maximum length
  const [max, min] = [Math.max(l1, l2), Math.min(l1, l2)];
  if (max / min > 2) {
    return Math.max(max / 3, min);
  }

  return max / 2;
  //   return Mth.max(l1,l2)/2;
}

console.log(maxlen(5, 12), 5, "(5, 12)");
console.log(maxlen(12, 5), 5, "(12, 5)");
