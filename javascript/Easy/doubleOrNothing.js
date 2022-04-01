// https://www.codewars.com/kata/5d378318e04cd7001ad72a27/train/javascript

function doubleOrNothing(cash, wager, losses){
    //your code here

    for (let i = 1; i < losses; i++) {
        wager*=2
        
    }
    cash-= wager
    return cash<0? "I'll pay you back later":cash;

  }

console.log(doubleOrNothing(11, 2, 3), 3);
console.log(doubleOrNothing(50, 5, 3), 30);
console.log(doubleOrNothing(66, 1, 7), 2);
console.log(doubleOrNothing(10, 2, 4), "I'll pay you back later");