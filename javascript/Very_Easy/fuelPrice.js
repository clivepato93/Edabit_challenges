// www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(litres, pricePerLitre) {
  // your code here
  // Good luck with it!
  return +Number(
    litres * pricePerLitre -
      litres *
        (litres >= 10
          ? 0.25
          : litres >= 8
          ? 0.2
          : litres >= 6
          ? 0.15
          : litres >= 4
          ? 0.1
          : litres >= 2
          ? 0.05
          : 0)
  ).toFixed(2);
}

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.4);
console.log(fuelPrice(5, 5.6), 27.5);
