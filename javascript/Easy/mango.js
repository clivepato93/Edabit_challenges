// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

console.log(mango(3, 3), 6);
console.log(mango(9, 5), 30);
