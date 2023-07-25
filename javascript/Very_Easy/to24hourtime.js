// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/solutions/javascript

function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  if (period === "pm") {
    return `${hour === 12 ? hour : hour + 12}` + `${minute}`.padStart(2, "0");
  } else {
    if (hour === 12) {
      return "00" + `${minute}`.padStart(2, "0");
    }
    return hour === 12
      ? "00"
      : `${hour}`.padStart(2, "0") + `${minute}`.padStart(2, "0");
  }
}

console.log(to24hourtime(1, 0, "am"), "0100", "Input =  1:00 am");
console.log(to24hourtime(1, 0, "pm"), "1300", "Input =  1:00 pm");
console.log(to24hourtime(12, 0, "am"), "0000", "Input = 12:00 am");
console.log(to24hourtime(12, 0, "pm"), "1200", "Input = 12:00 pm");
console.log(to24hourtime(6, 30, "am"), "0630", "Input =  6:30 am");
console.log(to24hourtime(9, 45, "pm"), "2145", "Input =  9:45 pm");
