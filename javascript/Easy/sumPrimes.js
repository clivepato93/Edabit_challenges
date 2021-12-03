// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes


function sumPrimes(num) {
    let total=0
    function isPrime(n){
      let c=0
      if(n==1){
        return false
      } 
      for(let number=1;number<=n;number++){
        if(n%number==0){
          c++;
        } if(c>2){
          return false
        }
      } return true
    }
  
    for(let i=1;i<=num;i++){
      if(isPrime(i)==true){
        total+=i;
      }
    }
  
  
    return total;
  }
  