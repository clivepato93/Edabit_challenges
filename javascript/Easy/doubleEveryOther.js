// https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

function doubleEveryOther(a) {
  return a.map((num, i) => (i % 2 == 1 ? num * 2 : num));
}

console.log(doubleEveryOther([1, 2, 3, 4]), [1, 4, 3, 8]);
