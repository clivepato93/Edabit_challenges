// https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript

// not yet complete
function seven(m) {
    let check = false;
    const x = [0,0]

    while(!check){
        // console.log(x,m)
        if(m%7!=0 && `${m}`.length!=2){
            const sub = +(`${m}`.slice(-1)) *2
            m = +`${m}`.slice(0,-1)-sub
            
        }
        
        else{
            x[0]=m;
            check = !check
        }

        x[1]+=1;

        // console.log(m,x)
    }
    return x
    // return m%7==0?x: seven(+`${m}`.slice(0,-1),x[0]=+`${m}`.slice(0,-1)- +`${m}`.slice(-1)*2,x[1]+=1)
    // return +`${m}`.slice(0,-1)- +`${m}`.slice(-1)*2
}

// x[0]=[+`${m}`.slice(0,-1),+`${m}`.slice(0,-1)- +`${m}`.slice(-1)*2,x[1]++

console.log(seven(1021), [10, 2])
// console.log(seven(1603), [7, 2])
console.log(seven(371), [35, 1])
console.log(seven(483), [42, 1])