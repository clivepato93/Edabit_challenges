// https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript

function createDict(keys, values) {
  // ...
  // two arrays into object through the use of the forEach method
  const obj = {};
  keys.forEach(
    (key, i) => (obj[key] = values[i] !== undefined ? values[i] : null)
  );
  return obj;
}

console.log(createDict(["a", "b", "c"], [1, 2, 3]), {
  a: 1,
  b: 2,
  c: 3,
});
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4]), {
  a: 1,
  b: 2,
  c: 3,
});
console.log(createDict(["a", "b", "c", "d"], [1, 2, 3]), {
  a: 1,
  b: 2,
  c: 3,
  d: null,
});
