// https://www.codewars.com/kata/57729a09914da60e17000329/train/javascript

var getMilitaryTime = function (input) {
  // code solution here
  const hours = input.slice(0, 2);
  const amOrPM = input.slice(input.length - 2);
  if (amOrPM === "PM") {
    return `${hours}` === `${12}`
      ? "12" + input.slice(2, -2)
      : `${+hours + 12}` + input.slice(2, -2);
  } else {
    if (hours === `${12}`) {
      return "00" + input.slice(2, -2);
    }
    return input.slice(0, -2);
  }
};

console.log(getMilitaryTime("12:00:01AM"), "00:00:01");
console.log(getMilitaryTime("11:46:47PM"), "23:46:47");
