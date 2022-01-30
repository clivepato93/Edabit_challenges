// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

function reverseWords(str) {
    const words = str.split(' ').map(w => [...w].reverse().join('')).join(' ');
    return words

  }


  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god')