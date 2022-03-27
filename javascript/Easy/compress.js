// https://www.codewars.com/kata/59de469cfc3c492da80000c5/train/javascript

function compress(sentence) {
    let s = sentence.toLowerCase().split(' ')
    const x = [];
    for (const word of s) {
        if(!x.includes(word)) {
            x.push(word)
        }
    }
    return s.map(el=> x.indexOf(el)).join('')
  }

console.log(compress("The bumble bee"), "012")
console.log(compress("SILLY LITTLE BOYS silly little boys"), "012012")
console.log(compress("Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"), "01234567802856734")
console.log(compress("The number 0 is such a strange number Strangely it has zero meaning"), "012345617891011")