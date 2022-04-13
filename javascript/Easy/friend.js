// https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript

function friend(friends){
    //your code here
    return friends.filter(el=> el.length==4)
  }

// https://www.codewars.com/kata/5ad29cd95e8240dd85000b54/train/javascript

// function friends(n, attempts = 0){
//   //Your code goes here
//   while(n>1){
//     n/= 2
//     attempts++
//   }
//   return attempts-1
// }

function friends(n, attempts = 0){
  //Your code goes here
  if(n<=1) return attempts?attempts-1:attempts


  return friends(n/=2,attempts+=1)
}

  console.log(friends(0), 0);
  console.log(friends(1), 0);
  console.log(friends(2), 0);