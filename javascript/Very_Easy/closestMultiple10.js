//https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/train/javascript

const closestMultiple10 = (num) => {
  num = Math.floor(num);
  const digit = +`${num}`.slice(-1);
  if (digit >= 5) {
    return num % 10 === 0 ? num : closestMultiple10((num = num + 1));
  } else {
    return num % 10 === 0 ? num : closestMultiple10((num = num - 1));
  }
  //   return num;
};

console.log(closestMultiple10(15), 20);
