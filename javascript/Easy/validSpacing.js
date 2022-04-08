// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript

function validSpacing(s) {
    // write your code here
    const check =  s.match(/^[\s]|.\s{2,}|\s$./g)
    return check===null?true:false;
  }


  console.log(null==null)
console.log(validSpacing('Hello world'), true);
console.log(validSpacing(' Hello world'), false);
console.log(validSpacing('Hello  world '), false);
console.log(validSpacing('Hello'), true);
console.log(validSpacing('Helloworld'), true);