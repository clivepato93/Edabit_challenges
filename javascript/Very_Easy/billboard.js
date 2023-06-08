//www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

function billboard(name, price = 30) {
  let total = 0;
  for (let index = 0; index < name.length; index++) {
    total += price;
  }
  return total;
}

console.log(billboard("Jeong-Ho Aristotelis"), 600);
