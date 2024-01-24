// https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript

function wordPattern(word) {
  word = word.toLowerCase();
  const obj = {};
  const arr = [];
  let num = 0;
  for (let i = 0; i < word.length; i++) {
    const key = word[i];
    if (key in obj == false) {
      obj[key] = num;
      num++;
    }
    arr.push(obj[key]);
  }
  return arr.join(".");
}
