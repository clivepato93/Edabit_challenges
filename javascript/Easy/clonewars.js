// https://www.codewars.com/kata/58ddffda929dfc2cae0000a5/train/javascript

var clonewars = function (kataPerDay) {
  // Your code here!
  let clones = 0;
  let katas = 0;
  while (kataPerDay >= 0) {
    debugger;
    const katasfortheday = kataPerDay * (clones == 0 ? 1 : clones * 2);
    kataPerDay--;
    katas += katasfortheday;
    clones = clones == 0 ? 1 : clones * 2;
    // kataPerDay--;
    if (!kataPerDay) {
      break;
    }
    // console.log(clones, katas, kataPerDay);
  }
  return [clones, katas];
};

console.log(clonewars(1), [1, 1]);
console.log(clonewars(5), [16, 57]);
console.log(clonewars(10), [512, 2036]);
