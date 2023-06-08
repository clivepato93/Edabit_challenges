//codewars.com/kata/5784c89be5553370e000061b/train/javascript

function maxProduct(a) {
  const max1 = Math.max(...a);
  let max2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max2 && a[i] !== max1) {
      max2 = a[i];
    }
  }
  return max1 * max2;
  // ...
  //   return [a.indexOf(Math.max(...a))]-a.find((num)Math.max(...a))
}

console.log(maxProduct([154, 428, 455, 346]), 194740);
