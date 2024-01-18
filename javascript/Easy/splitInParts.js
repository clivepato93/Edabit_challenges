// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

var splitInParts = function (s, p) {
  // Good Luck!
  const arr = [];
  for (let i = 0; i < s.length; i += p) {
    arr.push(s.slice(i, i + p));
  }
  return arr.join(" ");
};

console.log(
  splitInParts("supercalifragilisticexpialidocious", 3),
  "sup erc ali fra gil ist ice xpi ali doc iou s"
);
console.log(splitInParts("HelloKata", 1), "H e l l o K a t a");
console.log(splitInParts("HelloKata", 9), "HelloKata");
