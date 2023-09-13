//www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
function vowelOne(s) {
  // ...
  return [...s].map((letter) => (/[aieou]/i.test(letter) ? "1" : "0")).join("");
}

console.log(vowelOne("vowelOne"), "01010101");
console.log(vowelOne("123, arou"), "000001011");
