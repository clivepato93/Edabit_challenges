// https://www.codewars.com/kata/588453ea56daa4af920000ca/train/javascript

function arrayPacking(a) {
  //converting string binary to interger parseInt(string,2)
  return Number.parseInt(
    a
      .reverse()
      .map((num) => num.toString(2).padStart(8, "0"))
      .join(""),
    2
  );
}

console.log(arrayPacking([24, 85, 0]), 21784);

console.log(arrayPacking([23, 45, 39]), 2567447);
