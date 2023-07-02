function none(arr, fun) {
  // Every
  return arr.every((el) => fun(el) === false);
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
  true
);
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  }),
  false
);
