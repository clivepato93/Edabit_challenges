// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript
function excludingVatPrice(price) {
  // your code
  console.log(price);
  if (price === 0) {
    return 0;
  }
  if (Boolean(price) === false) {
    return -1;
  }
  return +(price / 1.15).toFixed(2);
}
