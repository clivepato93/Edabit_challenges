// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  if(n==1) return customers.reduce((t,c)=> t+c,0)
    const arr  = Array.from({length:n>customers.length?customers.length:n}).fill(0);
    for (let i = 0; i < customers.length; i++) {
      
      const min = arr.indexOf( Math.min(...arr));
      arr[min]+= customers[i]
    
    }
    return Math.max(...arr)
  }




// console.log(queueTime([], 1), 0);
console.log(queueTime([15,42,5,12,13,37,14,48,50,31,35],9),50);
// console.log(queueTime([1,2,3,4], 1), 10);
// console.log(queueTime([2,2,3,3,4,4], 2), 9);
// console.log(queueTime([1,2,3,4,5], 100), 5);