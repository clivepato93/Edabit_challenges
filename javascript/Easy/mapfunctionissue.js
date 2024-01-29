var func = function (item) {
  //your code here
  if (item % 2) return false;
  return true;
};

function map(arr, somefunction) {
  /* your code here
    note: Javascript already supports all this, we are just rewriting our own
    map() function with some quirk and error message */
  if (typeof somefunction !== "function") {
    return "given argument is not a function";
  }
  if (arr.find((el) => isNaN(+el))) {
    return "array should contain only numbers";
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(+arr[i]);
  }
  return arr;
}

console.log(map([27, 18, 5, "8", "66"], func), [
  false,
  true,
  false,
  true,
  true,
]);
console.log(map([48, 33, 2, 1], "str"), "given argument is not a function");
console.log(map([8, 12, "t"], func), "array should contain only numbers");
