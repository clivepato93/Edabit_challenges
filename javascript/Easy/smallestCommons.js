function smallestCommons(arr) {
   const min = Math.min(...arr);
   const max= Math.max(...arr); 
    const numbers = [];
    let i=max;
    let x= 1;
    for (let index = min; index <= max; index++) {
        numbers.push(index)
        
    }
    let t  = true;

    while(t){
      if(i%numbers[numbers.length-1]==0 && i%numbers[numbers.length-2]==0 && i%numbers[numbers.length-3]==0 && i%numbers[numbers.length-4]==0 && i%numbers[numbers.length-5]==0){
        t=false;
        return i
      } 
      else{
        i=max*x
        x++;}
        console.log(i)
      }
    // }
    //  if(numbers.every(function(item){
    //     return max%item==0
    //   })) 
     
    
  }
  
  console.log(    smallestCommons([1,5]));
  console.log(smallestCommons([23, 18]));