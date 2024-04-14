// https://www.codewars.com/kata/58029cc9af749f80e3001e34/train/javascript

function getNewNotes(salary, bills) {
  // code it away!!!
  const t = bills.reduce((t, c) => t + c, 0);
  return t >= salary ? 0 : Math.floor((salary - t) / 5);
}

console.log(getNewNotes(2000, [500, 160, 400]), 188);
console.log(getNewNotes(1260, [500, 50, 100]), 122);
console.log(getNewNotes(3600, [1800, 350, 460, 500, 15]), 95);
console.log(getNewNotes(1995, [1500, 19, 44]), 86);
console.log(getNewNotes(10000, [1800, 500, 1200, 655, 150]), 1139);
console.log(getNewNotes(2300, [590, 1500, 45, 655, 150]), 0);
console.log(getNewNotes(5300, [1190, 1010, 1045, 55, 10, 19, 55]), 383);
