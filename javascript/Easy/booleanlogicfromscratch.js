// https://www.codewars.com/kata/584d2c19766c2b2f6a00004f/train/javascript
const or = (a, b) => {
  // your code here :)#
  if (a) return true;
  if (b) return true;
  return false;
};

const xor = (a, b) => {
  // your code here :)
  if (Boolean(a) && Boolean(b) == false) return true;
  if (Boolean(a) == false && Boolean(b)) return true;
  //   if(!a && b) return true
  return false;
};

console.log(or(true, true), true || true);
console.log(or(true, false), true || false);
console.log(or(false, true), false || true);
console.log(or(false, false), false || false);
