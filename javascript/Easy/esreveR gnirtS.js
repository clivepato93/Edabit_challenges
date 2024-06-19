//www.codewars.com/kata/52b74e0936d582d9210005ff/solutions/javascript

String.prototype.reverse = function () {
  let words = this.split(" ").reverse();

  for (let index = 0; index < words.length; index++) {
    words[index] = [...words[index]].reverse().join("");
  }
  return words.join(" ");
};

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("String".reverse(), "gnirtS");
console.log("Another string".reverse(), "gnirts rehtonA");
