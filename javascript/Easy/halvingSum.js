// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/solutions/javascript

function halvingSum(n) {
    let x = 2;
    const original =n
    while (Math.floor(n/x)) {
        n+= Math.floor(original/x)
        x*=2
    }
    return n
  }

console.log(halvingSum(25),47);
console.log(halvingSum(127),247);