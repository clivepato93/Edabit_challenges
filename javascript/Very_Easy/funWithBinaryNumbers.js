// https://www.codewars.com/kata/5ce04eadd103f4001edd8986/train/javascript

function solution(n, b) {
  const arr = [];
  if (!n || !b) return arr;
  const maxBinary = "1".padStart(n, "1");
  const index = b.toString(2).length - 1;

  const bb = b.toString(2).padStart(n, "0");
  const maxNum = parseInt(maxBinary, 2);
  console.log(maxNum);
  let num = 1;
  while (num <= maxNum) {
    const currentBinary = [...num.toString(2).padStart(n, "0")]
      .reverse()
      .join("");
    if (currentBinary[index] === maxBinary[index]) {
      arr.push(num);
    }
    num++;
  }
  console.log(Math.pow(2, n));
  return arr;
}

// console.log(solution(4, 2), [2, 3, 6, 7, 10, 11, 14, 15]);
// console.log(
//   solution(6, 8),
//   [
//     8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42,
//     43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63,
//   ]
// );
// console.log(solution(5, 32), []);
// console.log(solution(6, 0), []);
// console.log(solution(0, 1), []);
