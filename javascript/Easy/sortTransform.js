// https://codewars.com/kata/57cc847e58a06b1492000264/train/javascript

function sortTransform(a) {
  const wordGen = (a, t) => {
    if (t) {
      return (
        String.fromCharCode(a[0]) +
        String.fromCharCode(a[1]) +
        String.fromCharCode(a[a.length - 2]) +
        String.fromCharCode(a[a.length - 1])
      );
    } else {
      return a[0] + a[1] + a[a.length - 2] + a[a.length - 1];
    }
  };
  let word = [];
  for (let index = 0; index < 4; index++) {
    debugger;
    if (index == 0) {
      word.push(wordGen(a, true));
      //   arr.push(w);
      a = a.sort((a, b) => a - b);
    }
    if (index == 1) {
      word.push(wordGen(a, true));
      //   arr.push(word);
      a = a.sort((a, b) => b - a);
    }
    if (index == 2) {
      word.push(wordGen(a, true));
      a = a.map((num) => String.fromCharCode(num)).sort();
    }
    if (index > 2) {
      word.push(wordGen(a, false));
      //   arr.push(word);
    }
  }
  return word.join("-");
}

console.log(
  sortTransform([121, 122, 123, 124, 125, 120, 122, 132]),
  "yzz-xy}-}yx-xy}"
);
// console.log(
//   sortTransform([111, 112, 113, 114, 115, 113, 114, 110]),
//   "oprn-nors-sron-nors"
// );
// console.log(
//   sortTransform([51, 62, 73, 84, 95, 100, 99, 126]),
//   "3>c~-3>d~-~d>3-3>d~"
// );
