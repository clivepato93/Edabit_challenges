// https://edabit.com/challenge/ZwQJM6FsRsWd3Bm6g

const limitNumber = (num, rangeLow, rangeHigh) =>
    num>=rangeLow&&num<=rangeHigh?num:num<rangeLow?rangeLow:rangeHigh



console.log((limitNumber(5, 1, 10), 5))
console.log((limitNumber(-3, 1, 10), 1))
console.log((limitNumber(14, 1, 10), 10))