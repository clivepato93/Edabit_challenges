// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
    const maxLength = Math.max(`${num1}`.length,`${num2}`.length)
    const number1 = [...`${num1}`.padStart(maxLength,'0')]
    const number2 = [...`${num2}`.padStart(maxLength,'0')]
    return Number(number1.map((num,i)=>eval(`${Number(num)+Number(number2[i])}`)).join(''))
  }

  console.log(add(2, 11), 13);
  console.log(add(0, 1), 1);
  console.log(add(0, 0), 0);
  console.log(add(16, 18), 214)