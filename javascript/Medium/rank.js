// https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

// not yet completed isntructions are a bit difficult to understand 

function rank(st, we, n) {
    // your code
    const alphabet = 
    ["A","B","C","D","E",
    "F","G","H","I","J",
    "K","L","M","N","O",
    "P","Q","R","S","T",
    "U","V","W","X","Y","Z"];

    if(!st) return"No participants"
    if(n>we.length) return "Not enough participants"
    const names = st.split(',')
    const sums = we.map(function (num,i) {
        let nameSum = [...names[i].toUpperCase()]
        .map(el => alphabet.indexOf(el)+1)
        .reduce((t,c)=> t+c,0)+names[i].length

        return [nameSum*num, names[i],num]
        
    }).sort((a,b)=> b[2]-a[2])

    const winner  = sums.slice(n-1,n+1)
    // if(winner[0][2]==winner[1][2]) return winner.sort((a,b)=> )
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH",[1, 4, 4, 5, 2, 1],4),'PaUL')
// console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
// console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")