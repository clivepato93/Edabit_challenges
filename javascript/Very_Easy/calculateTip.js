// codewars.com/kata/56598d8076ee7a0759000087/train/javascript
//regex Math.ceil
function calculateTip(amount, rating) {
  const tips = [amount * 0.2, amount * 0.15, amount * 0.1, amount * 0.05];

  if (/excellent$/i.test(rating)) {
    return Math.ceil(tips[0]);
  }

  if (/great$/i.test(rating)) {
    return Math.ceil(tips[1]);
  }
  if (/good$/i.test(rating)) {
    return Math.ceil(tips[2]);
  }
  if (/poor$/i.test(rating)) {
    return Math.ceil(tips[3]);
  }

  if (/terrible$/i.test(rating)) {
    return 0;
  }

  return "Rating not recognised";
}

console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);
