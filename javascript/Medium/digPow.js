

function digPow(n, p){
    // ...
    const o = n;
    const total  = [...`${n}`].map((el,i)=> el**(p+i)).reduce((t,c)=> t+c,0);
    console.log(total)
    // const t = true;
    if(total<n) return -1;
    if(n==total) return p;
    while(n!=total){
        console.log(n)
        n = o*p
        if(n==total){
            console.log(n)
            return p
        }
        else if(n>total){
            return -1
        }
        p++;

        
        
    }
    
    // .reduce((t,c)=> t+c,0)**p
  }

// console.log(digPow(695, 2),2)
// console.log(digPow(89, 1), 1)
// console.log(digPow(92, 1), -1)
// console.log(digPow(46288, 3), 51)
// console.log(digPow(89, 1), 1)
// console.log(digPow(7388,2),2)