// https://edabit.com/challenge/tSBCQQ8w9dAAZuKio

function stringPairs(str) {
    const list = []
    for (let index = 0; index <= str.length; index+=2) {
        if(str.slice(index,index+2))list.push(str.slice(index,index+2))
        
    }
    if (str.length%2===1){list[list.length-1]=list[list.length-1]+'*'}
    return list
}

console.log(stringPairs("abcdef"), ["ab", "cd", "ef"])
console.log(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
console.log(stringPairs(""), [])
console.log(stringPairs("pak"), ["pa", "k*"])