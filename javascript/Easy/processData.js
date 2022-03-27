// https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript

function processData(data){
    //your code here
    const values =[];
    for (const [a,b] of data) {
        values.push(a-b)
    }

    return values.reduce((t,c)=> t*c,1)
  }

console.log(processData([[2, 5], [3, 4], [8, 7]]), 3, `For [[2, 5], [3, 4], [8, 7]]`);
console.log(processData([[2, 9], [2, 4], [7, 5]]), 28, `For [[2, 9], [2, 4], [7, 5]]`);