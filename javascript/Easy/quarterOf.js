

const quarterOf = (month) => Math.floor(month/3)+(month%3!==0?1:0);

console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)