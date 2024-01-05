// https://www.codewars.com/kata/58545549b45c01ccab00058c/train/javascript

function calculate_total(subtotal, tax, tip) {
  // Your code here
  return +(subtotal + (subtotal / 100) * tax + (subtotal / 100) * tip).toFixed(
    2
  );
}

console.log(calculate_total(5, 5, 10), 5.75);
console.log(calculate_total(36.97, 7, 15), 45.1);
console.log(calculate_total(0.0, 6, 18), 0.0);
console.log(calculate_total(80.94, 0, 20), 97.13);
console.log(calculate_total(54.96, 8, 0), 59.36);
