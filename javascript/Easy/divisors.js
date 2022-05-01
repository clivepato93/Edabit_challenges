// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  const numbers = []
  for (let i = 2; i <integer; i++) {
      if(integer%i==0){
          numbers.push(i)
      }
      
  }
  return numbers.length?numbers:`${integer} is prime`
};

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");