// https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

function preFizz(n) {
    return [...Array.from({length:n},((_,i)=>i+1))]
  }

  console.log(preFizz(1), [1], `Array should be from 1 to 1`);
  console.log(preFizz(2), [1,2], `Array should be from 1 to 2`);
  console.log(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
  console.log(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
  console.log(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);