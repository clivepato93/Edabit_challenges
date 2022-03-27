


function evenAndOdd(num){
    // your code here
    const arr = ['0','0']
    const n = [...''+num]
    for (let i = 0; i < n.length; i++) {
        // console.log(n[i], typeof n[i])
        // const letter = n[i]
       if( (/[02468]/).test(n[i])) arr[0]+=n[i]

       else arr[1]+=n[i]
        
    }
    return arr.map(Number)
  }

console.log(evenAndOdd(126453), [264, 153], `For input 126453`);
console.log(evenAndOdd(3012), [2, 31], `For input 3012`);
// console.log(evenAndOdd(4628), [4628, 0], `For input 4628`);