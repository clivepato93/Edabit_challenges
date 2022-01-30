// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(n){
    const [h,l] = [n.split(' ').map(el=> +el),n.split(' ').map(el=> +el)]
    return `${Math.max(...h)} ${Math.min(...l)}`
  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"),'42 -9')