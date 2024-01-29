// https://www.codewars.com/kata/5899e054aa1498da6b0000cc/train/javascript

function reverseInvert(array) {
  //your code here
  // console.log(-0.66 % 1);
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    // console.log(num % 1);

    if (Math.abs(num % 1) > 0) {
      console.log(num);
      continue;
    }
    if (isNaN(num % 1)) {
      continue;
    } else {
      // console.log(str);
      if (num < 0) {
        const str = [...`${num}`].slice(1).reverse().join("");
        arr.push(+str * 1);
      } else {
        const str = [...`${num}`].reverse().join("");
        arr.push(+str * -1);
      }
    }
  }
  return arr;
  // return array.filter((num) => num%1==false ||  );
}

// console.log(reverseInvert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
// console.log(reverseInvert([-10]), [1]);
// console.log(reverseInvert([-9, -18, 99]), [9, 81, -99]);
// console.log(
//   reverseInvert([1, 12, "a", 3.4, 87, 99.9, -42, 50, 5.6]),
//   [-1, -21, -78, 24, -5]
// );
// console.log(reverseInvert([]), []);
console.log(
  reverseInvert(["s", 21, 0.68, 61, "l", -0.66, 46, "r", -54, 33, 45, 0.48]),
  [-12, -16, -64, 45, -33, -54]
);
