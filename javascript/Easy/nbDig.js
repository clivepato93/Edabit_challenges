

function nbDig(n, d) {
    // your code .filter(n=> `${n}`.includes(`${d}`)).length
    return Array.from({length:n+1},(_,i)=> i*i).reduce((t,number)=>{
        if(`${number}`.includes(`${d}`)){
            return t+= [...''+number].filter(el=> el == `${d}`).length
        }
        return t
    },0)
}

// console.log(nbDig(10,1),4)
// console.log(nbDig(25,1),11)
// console.log(nbDig(5750, 0), 4700)
// console.log(nbDig(11011, 2), 9481)
// console.log(nbDig(12224, 8), 7733)
// console.log(nbDig(11549, 1), 11905)
