// https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript

function quicksum(packet) {
  // Code time :)
  if (/[^A-Z\s]/.test(packet)) {
    return 0;
  }
  let increment = 1;
  let total = 0;
  for (let index = 0; index < packet.length; index++) {
    const letterPosition = packet[index].charCodeAt(0);
    // console.log(letterPosition, 27 - (91 - letterPosition));
    if (letterPosition > 64 && letterPosition < 91) {
      total += (27 - (91 - letterPosition)) * increment;
    }
    increment++;
    // console.log(total);
  }

  return total;
}

// console.log(quicksum("ACM"), 46);
// console.log(quicksum("MID CENTRAL"), 650);
// console.log(quicksum("BBC"), 15);
console.log(quicksum("???"), 0);
console.log(quicksum("axg "), 0);
console.log(quicksum("234 234 WEF ASDF AAA 554211 ???? "), 0);
console.log(quicksum("A C M"), 75);
