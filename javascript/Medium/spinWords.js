// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  //TODO Have fun :)
  return string.split(' ').map(el=> el.length >= 5 ? [...el].reverse().join(''): el).join(' ')
}

console.log(spinWords("Welcome"), "emocleW");