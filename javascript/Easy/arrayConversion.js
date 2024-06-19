// https://www.codewars.com/kata/588854201361435f5e0000bd/train/javascript

function arrayConversion(arr) {
  //coding and coding..
  let round = 1;
  let newArr = [];
  while (arr.length != 1) {
    if (round == 1) {
      for (let i = 0; i < arr.length; i += 1) {
        arr[i] = arr[i] + arr[i + 1];
        arr.splice(i + 1, 1);
      }
    } else if (round % 2 == 0) {
      for (let i = 0; i < arr.length; i += 1) {
        arr[i] = arr[i] * arr[i + 1];
        arr.splice(i + 1, 1);
      }
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        arr[i] = arr[i] + arr[i + 1];
        arr.splice(i + 1, 1);
      }
    }
    round += 1;
  }
  return arr[0];
}