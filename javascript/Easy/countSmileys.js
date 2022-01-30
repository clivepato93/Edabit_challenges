// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {

    const regEx = /^[\:\;][-~]?[D)]$/;
    return arr.reduce((t,c)=> t+Number(regEx.test(c)),0)
    
  } 

// console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
