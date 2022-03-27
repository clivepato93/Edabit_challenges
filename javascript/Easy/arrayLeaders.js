// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascripthttps://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript


function arrayLeaders(numbers){
    const n = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>numbers.slice(i+1).reduce((t,c)=>t+c,0)){
            n.push(numbers[i])
        }
    }
    return n
}



// return numbers.filter((n,i)=> {
//     if(n>numbers.slice(i+1).reduce((t,c)=>t+c,0|| n==0 && n>numbers.slice(i+1).reduce((t,c)=>t+c,0))){
//         console.log(n>numbers.slice(i+1).reduce((t,c)=>t+c,0),numbers.slice(i+1).reduce((t,c)=>t+c,0),n);
//         return n
//     }
//     return ;
// })


// console.log(arrayLeaders([1,2,3,4,0]), [4]);
// console.log(arrayLeaders([16,17,4,3,5,2]), [17,5,2]);

// console.log(arrayLeaders([-1,-29,-26,-2]), [-1]);
// console.log(arrayLeaders([-36,-12,-27]),  [-36,-12]);

// console.log(arrayLeaders([5,-2,2]), [5,2]);
console.log(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]);