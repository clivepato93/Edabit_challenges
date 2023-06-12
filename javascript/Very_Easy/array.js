//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(string) {
  // TODO
  const arr = string.split(",");
  if (arr.length < 3) return null;
  return arr.slice(1, arr.length - 1).join(" ");
}

console.log(array(""), null);
console.log(array("1"), null);
console.log(array("A1,B2"), null);
console.log(array("1,2,3"), "2");
console.log(array("1,2,3,4"), "2 3");
console.log(array("A1,B2,C3,D4,E5"), "B2 C3 D4");
console.log(array("A,1,23,456,78,9,Z"), "1 23 456 78 9");
