// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

function enough(cap, on, wait) {
    // your code here
    const result= (on+wait)-cap;
    return result>-1?result:0
  }

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);