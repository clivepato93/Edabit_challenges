function upArray(arr) {
  // ...
  if (!arr.length || arr.some((val) => val > 9 || val < 0)) return null;

  let str = "";
  //   num++;
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  str = +str;
  console.log(typeof str, str);
  const next = eval(str + 1);
  console.log(next);
  return [...`${num}`.padStart(arr.length, "0")].map(Number);
}

// console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
// console.log(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
// console.log(upArray([9, 9]), [1, 0, 0]);
// console.log(upArray([0, 7]), [0, 8]);
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
);

// console.log(upArray([1, -9]));
// console.log(upArray([1, 10]));
