// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript

function solution(number) {
  const arr = Array.from({ length: number - 1 }, (_, i) => i + 1);
  return [
    arr.filter((num) => num % 3 == 0 && num % 5 !== 0).length,
    arr.filter((num) => num % 3 !== 0 && num % 5 === 0).length,
    arr.filter((num) => num % 3 == 0 && num % 5 == 0).length,
  ];
}

console.log(solution(20), [5, 2, 1]);
console.log(solution(2), [0, 0, 0]);
console.log(solution(14), [4, 2, 0]);
console.log(solution(30), [8, 4, 1]);
console.log(solution(141), [37, 19, 9]);
