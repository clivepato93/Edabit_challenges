// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter



function convertToRoman(num) {
    let numeral = [];
    let numConvertor =[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1, 'I']];
    while(num>0){
        for (let i = 0; i < numConvertor.length; i++) {
            if (num>=numConvertor[i][0]) {
                
                let multipler  = Math.floor(num/numConvertor[i][0]);
                console.log(num)
                num-=(numConvertor[i][0]*multipler)
                let string = numConvertor[i][1];

                for (let index = 0; index < multipler; index++) {
                    numeral.push(string)      
                }
                
            }
     }
    }
    return numeral.join('')
   }
   

//  console.log(  convertToRoman(16));
//  console.log(convertToRoman(68));
 console.log(convertToRoman(3999));