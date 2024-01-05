// https://www.codewars.com/kata/576400f2f716ca816d001614/train/javascript
// recursion

// function reduce(fraction, highestDiv = Math.min(...fraction)) {
//   //simplify me!

//   if (fraction[0] == 1 || fraction[1] == 1) return fraction;
//   while (fraction[0] % highestDiv || fraction[1] % highestDiv) {
//     highestDiv--;
//     if (highestDiv == 1) return fraction;
//   }
//   return reduce(
//     [fraction[0] / highestDiv, fraction[1] / highestDiv],
//     highestDiv
//   );
// }

const gcd = (a, b) => {
  debugger;
  return b ? gcd(b, a % b) : a;
};

const reduce = ([a, b]) => {
  let d = gcd(a, b);
  return [a / d, b / d];
};

console.log(reduce([45, 120]), [3, 8]);
console.log(reduce([80, 120]), [2, 3]);
console.log(reduce([4, 2]), [2, 1]);
