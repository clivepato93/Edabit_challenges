// https://www.codewars.com/kata/58c218efd8d3cad11c0000ef/train/javascript
function binStr(s, count = 0) {
  //coding and coding..
  if (Number.parseInt(s, 2) == 0) return count;
  const obj = { 0: 1, 1: 0 };
  let flip = false;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      flip = true;
    }
    if (flip) {
      arr.push(obj[s[i]]);
    } else {
      arr.push(s[i]);
    }
  }

  return binStr(arr.join(""), count + 1);
}

console.log(binStr("0101"), 3);

console.log(binStr("10000"), 2);

console.log(binStr("0000000000"), 0);

console.log(binStr("1111111111"), 1);

console.log(binStr("10101010101010"), 14);

console.log(binStr("11111000011111"), 3);

console.log(binStr("000001111100000"), 2);

console.log(binStr("111000000000"), 2);

console.log(binStr("00000000111111111"), 1);

console.log(binStr("1010101011111111111111000000000"), 10);
