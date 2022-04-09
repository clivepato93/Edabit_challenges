// https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

function pattern(n){
    let output=[];
     //being coder
     for (let i = 1; i <= n; i++) {
         output.push(`1${'*'.repeat(i-1)}${i>1?i:''}`)
         
     }
     return output.join('\n')
   }


console.log(pattern(3),"1\n1*2\n1**3");
// console.log(pattern(7),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
// console.log(pattern(20),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20");
