// https://www.codewars.com/kata/563924c7fbc768197d000030/train/javascript

function convertBase20ToDecimal(init) {
  // teh awesome codez
  // console.log(init)
  const b20 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 18,
    J: 19,
  };
  let i = 0;
  console.log(init);

  //   let c = 0;
  //   for (let char of init) {
  //     if (!(char in b20)) {
  //       c++; // Invalid character
  //     }
  //   }
  //   if (c == init.length) return -1;
  //     init = init.replace(/[^A-J|0-9]/gi, "");
  console.log(init);
  init = [...init.toUpperCase()];
  let total = 0;
  const nums = [];
  for (let index = 0; index < init.length; index++) {
    const key = init[index];
    if (b20[key] == undefined) break;

    //       console.log(key);
    //       const multiplier = 20 ** i;
    //       console.log(multiplier);
    nums.push(b20[key]);
  }
  console.log(nums);
  return nums.length
    ? nums
        .reverse()
        .reduce((acc, curr, index) => (acc += curr * Math.pow(20, index)), 0)
    : -1;
}

// more efficient solution

function convertBase20ToDecimal(num) {
  const val = parseInt(num, 20);
  return isNaN(val) ? -1 : val;
}
// console.log(convertBase20ToDecimal("1"), 1);
// console.log(convertBase20ToDecimal("A"), 10);
// console.log(convertBase20ToDecimal("K"), -1);
console.log(convertBase20ToDecimal("50"), 100);
// console.log(convertBase20ToDecimal("JJ"), 399);
// console.log(convertBase20ToDecimal("0"), 0);
// console.log(convertBase20ToDecimal("d3Z3"), 263);
// console.log(convertBase20ToDecimal("bx"), 11);
