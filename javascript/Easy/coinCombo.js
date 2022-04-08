// https://www.codewars.com/kata/564d0490e96393fc5c000029/train/javascript

function coinCombo (cents) {
    let sum = 0
    let index =0
    const change = [0,0,0,0]
    const array = [25,10,5,1]
    while(sum<cents){
        if(array[index]+sum<=cents) {
            sum+= array[index]
            change[3-index]++;
        } 
        if(array[index]+sum>cents){
            index++;
        }
        console.log(sum)
        if(index==4) index= 0
    }

    return change
}

// better solution not mine though 😉
// function coinCombo(cents) {
//     const coins = [1,5,10,25];
//     const combo = [0,0,0,0];
//     for (let i = 3; i >= 0 && cents > 0; i--) {
//         combo[i] = Math.floor(cents / coins[i]);
//         cents -= combo[i] * coins[i];
//     }
//     return combo;
// }

// console.log( coinCombo(1), [1, 0, 0, 0]);
// console.log( coinCombo(2), [2, 0, 0, 0]);
// console.log( coinCombo(5), [0, 1, 0, 0]);
// console.log( coinCombo(6), [1, 1, 0, 0]);
// console.log( coinCombo(10), [0, 0, 1, 0]);
console.log( coinCombo(11), [1, 0, 1, 0]);
// console.log( coinCombo(15), [0, 1, 1, 0]);
// console.log( coinCombo(17), [2, 1, 1, 0]);
// console.log( coinCombo(25), [0, 0, 0, 1]);
// console.log( coinCombo(30), [0, 1, 0, 1]);
// console.log( coinCombo(36), [1, 0, 1, 1]);
// console.log( coinCombo(43), [3, 1, 1, 1]);