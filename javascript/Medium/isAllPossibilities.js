// https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/javascript

function isAllPossibilities(x){

    if(!x.length) return false

    return x.every((el,i)=> x.includes(i))
}

console.log(isAllPossibilities([0,1,2,3]),true);
console.log(isAllPossibilities([1,2,3,4]),false);
console.log(isAllPossibilities([ 9, 0, 6 ]),false)