// https://www.codewars.com/kata/55e9529cbdc3b29d8c000016/train/javascript
function charToAscii(string) {
  // String to Ascii code string[index].charCodeAt(0)
  //your code here
  if (!string) return null;
  const obj = {};
  string = string.replace(/\W/g, "");
  for (let index = 0; index < string.length; index++) {
    if (obj[string[index]]) continue;
    else {
      obj[string[index]] = string[index].charCodeAt(0);
    }
  }

  return obj;
}

console.log(charToAscii(""), null, "deals with an empty str");
console.log(charToAscii("a"), { a: 97 }, "deals with one char");
console.log(charToAscii("aaa"), { a: 97 }, "deals with repeated characters");
console.log(
  charToAscii("hello world"),
  { h: 104, e: 101, l: 108, o: 111, w: 119, r: 114, d: 100 },
  "deals with spaces"
);
console.log(
  charToAscii("ABaa ^"),
  { A: 65, B: 66, a: 97 },
  "deals with uppercase characters and non alphebetic characters"
);
