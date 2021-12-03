// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown

function countdown(n){
    if(n<=0){
      return [];
    } else{
        const arr = countdown(n-1);
        arr.unshift(n);
        return arr;
    }
  
  }

console.log(countdown(10));