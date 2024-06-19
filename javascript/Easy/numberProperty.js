// https://www.codewars.com/kata/5507309481b8bd3b7e001638/train/javascript
function isPrime(num) {
    debugger
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num == 3) return true;
    if (num == 5) return true;
    if (num == 7) return true;
    if (num == 11) return true;
         if (num == 13) return true;
    for (let i =2; i <= Math.floor(num/2); i++) {
        if(num%i==0) return false
        
    }
    return true;
}

function numberProperty(n) {
    debugger
    return [isPrime(n), n%2==0,n%10==0]

}

    // console.log(numberProperty(0), [false, true, true], "n = 0");
    // console.log(numberProperty(1), [false, false, false], "n = 1");
    // console.log(numberProperty(2), [true, true, false], "n = 2");
    // console.log(numberProperty(-2), [false, true, false], "n = -2");
//     console.log(numberProperty(4), [false, true, false], "n = 4");
//     console.log(numberProperty(5), [true, false, false], "n = 5");
//     console.log(numberProperty(10), [false, true, true], "n = 10");
//     console.log(numberProperty(-10), [false, true, true], "n = -10");
//     console.log(numberProperty(25), [false, false, false], "n = 25");
//     console.log(numberProperty(131), [true, false, false], "n = 131");
// console.log(numberProperty(341), [false, false, false], "n = 341");
console.log(numberProperty(961), [false, false, false], "n = 961");
                console.log(
                  numberProperty(702197),
                  [false, false, false],
                  "n = 702197"
                );