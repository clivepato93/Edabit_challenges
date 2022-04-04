// https://www.codewars.com/kata/5a1ebe0d46d843454100004c/train/javascript

function toDayOfYear(arr) {
    // return a number
    const [day,month,year] = arr
    const months = Array.from({length:12},(_,i)=> new Date(year,i+1,0).getDate())
    const x = months.slice(0,month-1).reduce((t,c)=> t+c,0)
    return (day+ (months.slice(0,month-1)).reduce((t,c)=> t+c,0))
  }


console.log(toDayOfYear([25, 12, 2017]), 359,);
console.log(toDayOfYear([31, 10, 1991]), 304);
console.log(toDayOfYear([1, 5, 3000]), 121);
console.log(toDayOfYear([14, 3, 1066]), 73);
console.log(toDayOfYear([5, 11, 1604]), 310);

console.log(toDayOfYear([31, 12, 2000]), 366);
console.log(toDayOfYear([31, 12, 2001]), 365);
console.log(toDayOfYear([31, 12, 2004]), 366);
console.log(toDayOfYear([31, 12, 2100]), 365);