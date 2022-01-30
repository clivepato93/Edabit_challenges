
function findUniq(arr) {

    const values= [...new Set(arr)]
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        if(arr.indexOf(element)==arr.lastIndexOf(element)) return element
    }
    
}
  

console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);