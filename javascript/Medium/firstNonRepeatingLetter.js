function firstNonRepeatingLetter(s) {
  // Add your code here
  if (s.length == 1) {
    return s[0];
  }
  //   s = s.toLowerCase()
  // console.log(s);
  debugger;
  let i = 0;
  while (s.length) {
    const regExp = new RegExp(`${s[i]}`, "ig");
    const match = s.match(regExp);
    if (match?.length > 1) {
      s = s.replace(regExp, "");
      i = 0;
    } else if (match.length == 1) {
      return s[i];
    } else {
      i++;
    }
  }
  return s;
}

console.log(firstNonRepeatingLetter("a"), "a");
console.log(firstNonRepeatingLetter("stress"), "t");
console.log(firstNonRepeatingLetter("moonmen"), "e");
