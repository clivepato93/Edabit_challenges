// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    const numberReturn = n => [...`${n}`].reduce((t,c)=> t+ +c,0)
    // ...
    return `${n}`.length==1?n:digital_root(n= numberReturn(n))

  }

console.log( digital_root(16), 7 )
console.log( digital_root(456), 6 )
