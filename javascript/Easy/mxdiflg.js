//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
    if(!a1.length||!a2.length) return -1;
    const minLength=arr=> Math.min(...arr.map(el=> el.length));
    const maxLength=arr=> Math.max(...arr.map(el=> el.length));
    return Math.max(Math.abs(minLength(a1)-maxLength(a2)),Math.abs(minLength(a2)-maxLength(a1)))
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);

