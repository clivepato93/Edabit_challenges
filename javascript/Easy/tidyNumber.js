//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

function tidyNumber(n) {
  //your code here
  const numString = String(n);
  for (let index = 1; index < numString.length; index++) {
    const num = numString[index];
    const prev = numString[index - 1];
    if (prev > num) return false;
  }

  return true;
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
