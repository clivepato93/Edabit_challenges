// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// function solution(string) {
//     const words = [];
//     let start= 0;
//     for (let i = 0; i < string.length; i++) {
//         if(string[i]=== string[i].toUpperCase()){
//             // console.log(string.slice(start,i))
//             words.push(string.slice(start,i))
//             start = i;
//             // console.log(start)
//         }

//         if(i==(string.length-1) ){
            // console.log( string.slice(start,i+1))
    //         words.push(string.slice(start,i+1))
    //     }
    // }
    // return words.join(' ')
    // }
    // return string.slice(0, string.indexOf(/[A-Z]/g))
    // return  string.search(/[A-Z]/g)


// console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number){
    // convert the number to a roman numeral
    let numeral = [];

    const numConvertor =[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1, 'I']];
    while(number>0){
        for (let i = 0; i < numConvertor.length; i++) {
            if (number>=numConvertor[i][0]) {
                
                let multipler  = Math.floor(number/numConvertor[i][0]);
                // console.log(number)
                number-=(numConvertor[i][0]*multipler)
                let string = numConvertor[i][1];

                for (let index = 0; index < multipler; index++) {
                    numeral.push(string)      
                }
            }
     }
    }
    return numeral.join('')
   }

console.log(solution(1), 'I', '1 should, "I"')
console.log(solution(2), 'II', '2 should, "II"')
console.log(solution(3), 'III', '3 should, "III"')
console.log(solution(4), 'IV', '4 should, "IV"')
console.log(solution(5), 'V', '5 should, "V"')
console.log(solution(9), 'IX', '9 should, "IX"')
console.log(solution(10), 'X', '10 should, "X"')
console.log(solution(11), 'XI')
console.log(solution(19), 'XIX')
console.log(solution(22), 'XXII')
console.log(solution(15), 'XV')
console.log(solution(1954))

// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
  //  function solution (roman) {
  //   const  x = 
  //   {'M':1000,'CM':900,
  //    'D':500,'CD':400,
  //    'C':100,'XC':90,
  //    'L':50,'XL':40,
  //    'X':10,'IX':9,
  //    'V':5,'IV':4,
  //    'I':1 }


  //   return roman.match(/M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I/g).reduce((t,c)=> t+ x[c],0)

  // }
   
  // console.log( solution('XXI'), 21);
//   console.log( solution('I'), 1);
  // console.log( solution('IV'), 4);
//   console.log( solution('MMVIII'), 2008);
//   console.log( solution('MDCLXVI'), 1666);