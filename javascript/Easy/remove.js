// https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript

function remove (string) {
    //coding and coding....
    return string.split(' ').filter(el=> el.indexOf('!')==-1&&el.lastIndexOf('!')==-1||el.indexOf('!')!=el.lastIndexOf('!')).join(' ');
  }


console.log( remove("Hi!", ""));
console.log( remove("Hi! Hi!", ""));
console.log( remove("Hi! Hi! Hi!", ""));
console.log( remove("Hi Hi! Hi!", "Hi"));
console.log( remove("Hi! !Hi Hi!", ""));
console.log( remove("Hi! Hi!! Hi!", "Hi!!"));
console.log( remove("Hi! !Hi! Hi!", "!Hi!"));