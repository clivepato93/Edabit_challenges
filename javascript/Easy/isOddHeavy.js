// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

function isOddHeavy(n){
    const odds = n.filter(n=>Math.abs(n)%2==1)
    const even = n.filter(n=>Math.abs(n)%2==0||!n)

    if(!odds.length) return false;

    for (let i = 0; i < odds.length; i++) {
        for (let x = 0; x < even.length; x++) {
           if(odds[i]< even[x]) return false
            
        }
    }
    return true
  }
  console.log(isOddHeavy([ 6, 2, 4, 2, 2, 2, 1, 5, 0, 0, -12, 13, -5, 4, 6 ]),false)
  console.log(isOddHeavy([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, -2, -1 ]),false)
  console.log(isOddHeavy([ 0, -1, 1 ]),false)
//   console.log(isOddHeavy([0,2,19,4,4]),true);
//   console.log(isOddHeavy([1,-2,-1,2]),false);