


function countPositivesSumNegatives(input) {
    console.log(input)
    if(input==null) return []
    const posCount = input.reduce((t,c)=> c>0?t+=1:t=t,0);
    const negTotal = input.reduce((t,c)=> c<0?t+=c:t=t,0);
    console.log(posCount,negTotal)
    return [posCount,negTotal];
}
//!posCount||!negTotal?[]:
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10,-65])
//input.reduce((t,c)=> c<0?t+=c:t=t,0)||

// ||!input.reduce((t,c)=> t+=c,0)
console.log(countPositivesSumNegatives([0,2,3,0,5,6,7,8,9,10,-11,-12,-13,-14]),[8,-50]) 

console.log(countPositivesSumNegatives([ 0, 0 ]),[])

console.log(null == )