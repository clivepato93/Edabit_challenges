// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor){
    return numbers.filter(el=> el%divisor==0)
}

console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);