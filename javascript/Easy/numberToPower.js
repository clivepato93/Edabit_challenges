function numberToPower(number, power){
  
  // Code here
  const originalVal = number
  if(!power) return 1
  for (let i = 1; i < power; i++) {
    number*=originalVal;
    
  }

  return number
  
}

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);
