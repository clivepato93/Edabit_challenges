// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(integer) {
  let string = [];
  for (let i = 0; i < integer; i++) {
    string.push('+'.repeat(integer));
  }
  return string.join('\n');
}

console.log(
  generateShape(8),
  '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
);
