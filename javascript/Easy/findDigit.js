// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

const findDigit = function(num, nth){

    if(nth<=0) return -1
    const digits  = `${num}`.split('').map(Number).reverse().filter(el => !Number.isNaN(el))
    return digits[nth-1]?digits[nth-1]:0
}

console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);