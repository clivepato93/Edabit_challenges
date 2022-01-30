// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){
    const words = x.split(' ')
    const final = []
    for (let i = 0; i < words.length; i++) {
        const word = [...words[i]].map(el=> el.charCodeAt(0)-96).reduce((t,c)=> t+c,0)
        final.push(word)
    }
    // console.log(final[final.indexOf(Math.max(...final))],final)
    return words[final.indexOf( Math.max(...final))]
}

function high(x){
    const words = x.split(' ')
    const final = words.map(el => [...el].reduce((t,c,i)=> t+ c.charCodeAt(0)-96,0));

    // console.log(final[final.indexOf(Math.max(...final))],final)
    return words[final.indexOf( Math.max(...final))]
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
// console.log(high('take me to semynak'), 'semynak');   
// console.log(high('aa b'), 'aa');
// console.log(high('b aa'), 'b');
// console.log(high('bb d'), 'bb');
// console.log(high('d bb'), 'd');
// console.log(high('aaa b'), 'aaa');