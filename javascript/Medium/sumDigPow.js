
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
    // Your code here
    const checker = (number)=>{
        return [...(''+a)].reduce((t,c,i)=> t+Number(c)**(i+1),0)==number
    }
    const f = []
    for (a; a <=b; a++) {
        if((''+a).length==1){
            f.push(a)
        }
        else{
            const x = [...(''+a)].reduce((t,c,i)=> t+Number(c)**(i+1),0)
            if(x==a){
                f.push(a)
            }
        }
        
    }
    return f
  }

  function sumDigPow(a, b) {
    const checker = (number)=>{
        return [...(''+a)].reduce((t,c,i)=> t+Number(c)**(i+1),0)==number
    }

    const f = []
    for (a; a <=b; a++) {
        if(checker(a)){
            f.push(a)
        }
    }
    return f

  }

console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100),  [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(90, 150), [135])
console.log(sumDigPow(50, 150), [89, 135])
console.log(sumDigPow(10, 150), [89, 135])