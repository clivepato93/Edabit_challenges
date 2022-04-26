// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript

function findSum(n) {
    let x =0
    for (let i = 1; i <=n; i++) {
        if(i%3==0||i%5==0){
            x+=i
        }
        
    }

    return x
  }

console.log(findSum(5), 8);
console.log(findSum(10), 33);