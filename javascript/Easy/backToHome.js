// https://edabit.com/challenge/MQvP7E5sNRswScHpn


function backToHome(directions){
  const final  = ['N','E','S',"W"];
  for (let i = 0; i < final.length; i++) {
     const letter=  new RegExp(`${final[i]}`,'g')
     const test  = directions.match(letter)
     if(test==null|| test.length%2!=0){
         return false
     }
    } 
    return true
    //    console.log(final)   
}

console.log(backToHome("NNNN"), false)
console.log(backToHome("NENESSWW"), true)
console.log(backToHome("NEESSW"), false)
console.log(backToHome("EEWE"), false)
console.log(backToHome("NNSSEEEWWWEW"), true)