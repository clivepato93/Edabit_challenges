// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arr) {
  const newArr = [...arr];
  return (num) => {
    return newArr.map((n) => n * num);
  };
}
