//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let round = 0;
    while((''+num).length!=1){
     num = [...''+num].reduce((t,c)=> t* +c,1)
     round++;

   }
   return round
 }


console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);