// https://www.codewars.com/kata/55d7e5aa7b619a86ed000070/train/javascript

function orderWord(s) {
  //your code here
  return s
    ? [...s].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
    : "Invalid String!";
}

console.log(orderWord("Hello, World!"), " !,HWdellloor");
console.log(orderWord("bobby"), "bbboy");
console.log(orderWord("b"), "b");
console.log(orderWord(""), "Invalid String!");
console.log(orderWord("completesolution"), "ceeillmnooopsttu");
console.log(orderWord('"][@!$*(^&%'), '!"$%&(*@[]^');
console.log(orderWord('i"d][@z!$r(^a&world%'), '!"$%&(@[]^addilorrwz');
console.log(orderWord(null), "Invalid String!");
console.log(orderWord("cba"), "abc");
console.log(orderWord("abc"), "abc");
