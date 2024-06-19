// https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript

function planeSeat(a) {
  const [seat, letter] = [
    +a.slice(0, a.length > 2 ? 2 : 1),
    a.slice(a.length > 2 ? 2 : 1, a.length),
  ];

  if (seat > 60) {
    return "No Seat!!";
  }

  if (letter == "I" || letter == "J") {
    return "No Seat!!";
  }

  let seatPos = "";
  if (seat > 0 && seat < 21) {
    seatPos += "Front";
  }
  if (seat > 20 && seat < 41) {
    seatPos += "Middle";
  }

  if (seat > 40) {
    seatPos += "Back";
  }

  if (/[A-C]/.test(letter)) {
    return seatPos + "-Left";
  }

  if (/[D-F]/.test(letter)) {
    return seatPos + "-Middle";
  }

  return seatPos + "-Right";
}

console.log(planeSeat("2B"), "Front-Left");
console.log(planeSeat("20B"), "Front-Left");
console.log(planeSeat("58I"), "No Seat!!");
