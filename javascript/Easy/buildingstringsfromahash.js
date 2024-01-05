// https://codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript

function solution(pairs) {
  // TODO: complete
  const objKeys = Object.keys(pairs);

  return objKeys.map((key) => `${key} = ${pairs[key]}`).join(",");
}
