// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum( a,b )
{

    if(a==b) return a
    let t =0;
    [a,b]=[Math.min(a,b),Math.max(a,b)]

   //Good luck!
   for (a; a <= b; a++) {
       t+=a
       
   }

   return t

}

console.log(getSum(0,-1),-1);
console.log(getSum(0,1),1);