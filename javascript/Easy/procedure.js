// https://www.codewars.com/kata/58ca77b9c0d640ecd2000b1e/train/javascript

function procedure(n){
    //Your code here!
    const multiples = [];
    let i =1
    while(n*i<=100){
        multiples.push(n*i);
        i++;
    }
    return multiples.map(el=> [...`${el}`].reduce((t,c)=> t+ +c,0)).reduce((t,c)=> t+c,0)

  }

console.log(procedure(30), 18);
console.log(procedure(12), 72);
console.log(procedure(49), 30);
console.log(procedure(17), 48);
console.log(procedure(10), 46);