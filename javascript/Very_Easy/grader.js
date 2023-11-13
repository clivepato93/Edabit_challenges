//www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
function grader(score) {
  if (score > 1 || score < 0.6) {
    return "F";
  }
  if (score >= 0.9) {
    return "A";
  }
  if (score >= 0.8) {
    return "B";
  }
  if (score >= 0.7) {
    return "C";
  }
  if (score >= 0.6) {
    return "D";
  }
}

console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");
