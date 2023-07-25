function encodeCD(n) {
  //number to binary n.toString(2)
  const bin = n.toString(2).padStart(8, "0");
  let string = "P";
  const combos = { PP: 0, LL: 0, PL: 1, LP: 1 };
  const nextLetter = { 1: "L", 0: "P" };
  for (let i = bin.length - 1; i >= 0; i--) {
    const firstLetter = nextLetter[bin[i]];
    const lastStringLetter = string[string.length - 1];
    const secondLetter = combos[`${lastStringLetter}${firstLetter}`];
    const thirdStep = nextLetter[String(secondLetter)];
    string += thirdStep;
  }
  return string;
}

console.log(encodeCD(5), "PLLPPPPPP"); //   5 = 00000101
// console.log(encodeCD(16), "PPPPPLLLL"); //  16 = 00010000
// console.log(encodeCD(63), "PLPLPLPPP"); //  63 = 00111111
// console.log(encodeCD(222), "PPLPLPPLP"); // 222 = 11011110
