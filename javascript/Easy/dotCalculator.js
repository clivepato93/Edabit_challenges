// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

function dotCalculator (equation) {
    const dots = equation.split(/\s.{1,2}\s/);
    const [a,b] = dots;
    const op = equation.match(/\s.{1,2}\s/)[0].slice(1,-1)
    
    const obj = {
        '+': a.length +b.length,
        '-': a.length -b.length,
        '*': a.length *b.length,
        '//': a.length /b.length,
    }
    return '.'.repeat(Math.floor(obj[op]))

}

console.log( dotCalculator("..... + ..............."), "....................");
console.log( dotCalculator("..... - ..."), "..");
console.log( dotCalculator("..... - ."), "....");
console.log( dotCalculator("..... * ..."), "...............");
console.log( dotCalculator("..... * .."), "..........");
console.log( dotCalculator("..... // .."), "..");
console.log( dotCalculator("..... // ."), ".....");
console.log( dotCalculator(". // .."), "");
console.log( dotCalculator(". - ."), "");