// https://www.codewars.com/kata/589ebcb9926baae92e000001/train/javascript

function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...
    return number.match(/\d{2}/g).map(el=> String.fromCharCode(+el)).join('')
    
  }

console.log(convert("65"),"A");
console.log(convert("656667"),"ABC");
console.log(convert("676584"),"CAT");
console.log(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE");