

function sumFibs(num) {
    let total =0
    let a = 0; 
    let b = 1;
    for(let i=0;i<num;i++){
      a=b-1;
      b+=a;
      total+=b
      console.log(a,b,total)
    //   if(total%2==1){
    //     total+=b;
    //     }
    }
    // return total;
  }
  
 console.log( sumFibs(10));