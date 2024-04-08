// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

function productArray(numbers) {
  //your code here
  const final = [];
  for (let i = 0; i < numbers.length; i++) {
    let total = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (j == i) continue;
      else {
        total *= numbers[j];
      }
    }
    final.push(total);
  }
  return final;
}
