// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString(strng) {
  // return incrementedString
  const digits = strng.match(/\d+$/);
  console.log(digits);
  let num = digits ? parseInt(digits) + 1 : 1;

  let stringNum = `${num}`.padStart(digits ? digits[0].length : 0, 0);
  console.log(stringNum);

  //   const pos = strng.match(/[a-z]{1}\d{0,}$/);
  //   console.log(pos.index);
  return strng.slice(0, digits ? digits.index : strng.length) + stringNum;
}

console.log(incrementString("foobar000", "foobar001"));
console.log(incrementString("foobar999", "foobar1000"));
console.log(incrementString("foobar00999", "foobar01000"));
// console.log(incrementString("foo", "foo1"));
// console.log(incrementString("foobar001", "foobar002"));
// console.log(incrementString("foobar1", "foobar2"));
// console.log(incrementString("1", "2"));
// console.log(incrementString("009", "010"));
// console.log(incrementString("fo99obar99", "fo99obar100"));
