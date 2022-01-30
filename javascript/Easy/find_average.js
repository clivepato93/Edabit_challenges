// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
    // your code here
    return array.length?array.reduce((t,c)=> t+c,0)/array.length:0;
  }