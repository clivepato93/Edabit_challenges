// https://www.codewars.com/kata/5761a717780f8950ce001473

function calculateAge(firstYear, secondYear) {
  if (firstYear === secondYear) return "You were born this very year!";
  // enter your code here.
  const sum = Math.abs(firstYear - secondYear);
  if (firstYear > secondYear)
    return `You will be born in ${sum} year${sum > 1 ? "s" : ""}.`;
  return `You are ${sum} year${sum > 1 ? "s" : ""} old.`;
}

console.log(calculateAge(2010, 1990), "You will be born in 20 years.");
console.log(calculateAge(2010, 1500), "You will be born in 510 years.");
console.log(calculateAge(2011, 2012), "You are 1 year old.");
console.log(calculateAge(2000, 1999), "You will be born in 1 year.");
