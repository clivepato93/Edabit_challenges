// https://www.codewars.com/kata/57193a349906afdf67000f50/train/javascript

function magicSum(numbers) {
  let t = 0;
  // TODO: Program Me
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (!element) continue;
    else {
      if (element % 2 && `${element}`.indexOf(3) > -1) t += element;
    }
  }
  return t;
  // const curr = `${c}`;
  // if (curr.slice(-1) == "3") return (t += c);
}
