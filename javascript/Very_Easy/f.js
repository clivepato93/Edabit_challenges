// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript

function f(n){
    //insert your code here.... and go crazy!
      return typeof n!='number'|| n<1||! Number.isInteger(n)?false: (n*(n+1))/2
    };

console.log(f(100), 5050);
console.log(f(300), 45150);