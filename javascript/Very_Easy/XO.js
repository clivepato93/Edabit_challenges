// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    const list = [...str]
    return list.filter(el=> el=='x'|| el=='X').length==list.filter(el=> el=='o'||el=='O').length
  }

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false)