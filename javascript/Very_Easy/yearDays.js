function yearDays(year) {
  //your code here
  if (year > 100 && year % 400 === 0) {
    console.log("code block A");
    return `${year} has 366 days`;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    console.log("code block B");
    return `${year} has 365 days`;
  }
  if (year % 100 === 0 && year % 4 === 0) {
    console.log("code block B");
    return `${year} has 366 days`;
  }
  if (year % 4 == 0) {
    console.log("code block C");

    return `${year} has 366 days`;
  }
  if (!year) {
    console.log("Code block D");
    return "0 has 366 days";
  }
  return `${year} has 365 days`;
}

console.log(yearDays(0), "0 has 366 days");
console.log(yearDays(-64), "-64 has 366 days");
console.log(yearDays(2016), "2016 has 366 days");
console.log(yearDays(1974), "1974 has 365 days");
console.log(yearDays(-10), "-10 has 365 days");
console.log(yearDays(666), "666 has 365 days");
console.log(yearDays(1857), "1857 has 365 days");
