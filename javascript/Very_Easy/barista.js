// https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/train/javascript

function barista(coffees){
    coffees= coffees.sort((a,b)=>a-b)

    let total = 0
    for (let i = 0; i < coffees.length; i++) {
        const element = coffees[i];
        if(i==0) total+=element
        else{
            total+= (2*i)+element+coffees.slice(0,i).reduce((t,c)=>t+c,0)
        }
    }
    return total
  }

console.log(barista([2,10,5,3,9]), 85);
console.log(barista([4,3,2]),22);
console.log(barista([20,5]),32);
// console.log(barista([20,5,4,3,1,5,7,8]),211);
// console.log(barista([5,4,3,2,1]),55);