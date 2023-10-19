// https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript

function neutralise(s1, s2) {
  // Here be dragons!
  let final = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      final += s1[i];
    } else {
      final += "0";
    }
  }

  return final;
}

function neutralise(s1, s2, final = "", i = 0) {
  if (final.length === s1.length) {
    return final;
  }

  return neutralise(s1, s2, (final += s1[i] === s2[i] ? s1[i] : "0"), (i += 1));
}

console.log(neutralise("--++--", "++--++"), "000000");
console.log(neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
console.log(neutralise("-++-", "-+-+"), "-+00");
console.log(neutralise("--++", "++++"), "00++");
console.log(neutralise("+++--+---", "++----++-"), "++0--000-");
console.log(neutralise("-----", "-----"), "-----");
console.log(neutralise("-+", "++"), "0+");
console.log(neutralise("--", "-+"), "-0");
console.log(neutralise("-++", "+--"), "000");
console.log(neutralise("++-++--++-", "-+++-++-++"), "0+0+0000+0");
console.log(neutralise("-++-+-++-", "+-++++---"), "00+0+000-");
console.log(neutralise("---++-+--", "-+++--++-"), "-00+0-+0-");
console.log(neutralise("+-----+++-", "--+-+-++--"), "0-0-0-++0-");
console.log(neutralise("+-----+-", "---++-++"), "0--00-+0");
console.log(neutralise("-+--+-+---", "-+--+-+-+-"), "-+--+-+-0-");
console.log(neutralise("+-+", "-++"), "00+");
console.log(neutralise("-++", "-+-"), "-+0");
console.log(neutralise("---+", "-+++"), "-00+");
console.log(neutralise("+--", "+--"), "+--");
console.log(neutralise("--+++-+-", "+++++---"), "00+++-0-");
