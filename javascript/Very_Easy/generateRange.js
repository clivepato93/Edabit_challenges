// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

function generateRange(min, max, step){
    const numbers = []
    for (let i = min; i <= max; i+=step) {
        numbers.push(i)   
    }

    return numbers
  }

console.log(generateRange(2, 10, 2), [2,4,6,8,10]);