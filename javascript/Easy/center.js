// https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript
function center (strng, width, fill = ' ') {
    if(!strng && !width) return strng
    const x  = (width-strng.length)/2;
    const [left,right] = [Math.ceil(x),Math.floor(x)]
    console.log(x,Math.ceil(x),Math.floor(x))
    return strng.length>width? strng: `${strng}`.padStart(left+strng.length,fill).padEnd(width,fill)
  }

// console.log(center("a", 3, ' '), " a ");
// console.log(center("a", 3), " a ");
// console.log(center("", 3, '_'), "___");
// console.log(center("abc", 10, '_'), "____abc___");
// console.log(center("____abc___", 10, '_'), "____abc___");
// console.log(center("abcdefg", 2, ' '), "abcdefg");
// console.log(center("a", 2, '_'),'_a');
console.log( center("F", 67, 'L'));