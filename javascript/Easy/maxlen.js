function maxlen(l1, l2) {
  // return maximum length
  const [max, min] = [Math.max(l1, l2), Math.min(l1, l2)];
  if (l1 === l2) return l1 / 2;
  if (max / min < 3) {
    return Math.min(l1, l2);
  }

  return min / 3;
  //   return Mth.max(l1,l2)/2;
}

console.log(maxlen(5, 12), 5, "(5, 12)");
console.log(maxlen(12, 5), 5, "(12, 5)");
