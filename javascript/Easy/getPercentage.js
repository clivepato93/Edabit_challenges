// https://www.codewars.com/kata/58a369fa5b3daf464200006c/train/javascript

function getPercentage(sent, limit = 1000) {
  // write code here
  if (!sent) return "No e-mails sent";
  const percent = Math.floor((sent / limit) * 100);
  if (percent < 100) return `${percent}%`;
  return "Daily limit is reached";
}

console.log(getPercentage(101, 1000), "10%");
console.log(getPercentage(256, 500), "51%");
console.log(getPercentage(256, 300), "85%");
console.log(getPercentage(259), "25%");
console.log(getPercentage(0), "No e-mails sent");
console.log(getPercentage(1000, 1000), "Daily limit is reached");
