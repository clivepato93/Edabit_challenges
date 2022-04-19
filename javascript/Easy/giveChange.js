
// https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript

function giveChange(amount) {
    const bills = [1,5,10,20,50,100];
    const change = [0,0,0,0,0,0];
    for (let i = 5; i >= 0 && amount > 0; i--) {
          change[i] = Math.floor(amount/bills[i]);
          amount -= change[i] * bills[i];
          console.log(change,amount)
      }
      return change;
  }

  console.log(giveChange(365), [0,1,1,0,1,3]);
//   console.log(giveChange(217), [2,1,1,0,0,2]);
//   console.log(giveChange(8),   [3,1,0,0,0,0]);