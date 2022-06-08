// 
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

const result = (arr,multipler) => arr.reduce((t,c)=>t+c**multipler,0)

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    return result(a,2)> result(b,3)
  }