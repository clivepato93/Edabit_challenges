// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

function dontGiveMeFive(start, end)
{
    const v = [];
  for (start; start <= end; start++) {
      if(`${start}`.includes('5')){
          continue
      }
      else v.push(start)
  }

  return v.length
}

console.log(dontGiveMeFive(1,9), 8);
console.log(dontGiveMeFive(4,17), 12);