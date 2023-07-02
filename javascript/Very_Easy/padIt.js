// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  //coding here
  while (n) {
    if (n % 2 == 1) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    n = n - 1;
  }
  return str;
}

console.log(padIt("a", 1), "*a");
console.log(padIt("a", 2), "*a*");
console.log(padIt("a", 3), "**a*");
console.log(padIt("a", 4), "**a**");
console.log(padIt("a", 5), "***a**");
