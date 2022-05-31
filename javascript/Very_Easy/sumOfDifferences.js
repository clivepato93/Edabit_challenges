// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
    arr = arr.sort((a,b)=>b-a);
    return arr.slice(0,arr.length-1).reduce((t,c,i)=> t+(c-arr[i+1]),0)
}

console.log(sumOfDifferences([1, 2, 10]), 9);


console.log(sumOfDifferences([-3, -2, -1]),2);