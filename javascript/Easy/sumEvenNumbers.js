// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(input) {
    return input?input.reduce((acc,num)=> num%2==0?num+acc:acc=acc,0):0
  }
  