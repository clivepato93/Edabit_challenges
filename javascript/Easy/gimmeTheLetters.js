// https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript

function gimmeTheLetters(sp) {
  const [start, end] = [sp[0], sp[2]];
  let final = "";
  for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
    final += String.fromCharCode(i);
  }
  return final;
}
