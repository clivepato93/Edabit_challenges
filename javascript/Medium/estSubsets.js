// https://www.codewars.com/kata/584703d76f6cf6ffc6000275/solutions/javascript
function estSubsets(arr) {
  var set_ = new Set(arr);

  return Math.pow(2, set_.size) - 1;
}
