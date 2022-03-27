// https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript

function unusedDigits(...num){
    // ...
    const x = num.join('');
    let s = ''
    for (let i = 0; i < 10; i++) {
        let letter  = i+''
        if(!x.includes(letter))
        s+= letter
        
    }
    return s
  }

console.log(unusedDigits(12, 34, 56, 78), "09")
console.log(unusedDigits(2015, 8, 26), "3479")