// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
function aliasGen(first, last) {
  // Code Here
  console.log(arguments);
  if (/^[A-Z]/i.test(first) && /^[A-Z]/i.test(last)) {
    return (
      firstName[first.slice(0, 1).toUpperCase()] +
      " " +
      surname[last.slice(0, 1).toUpperCase()]
    );
  }
  return "Your name must start with a letter from A - Z.";
}

console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(
  aliasGen("7393424", "Anumbha"),
  "Your name must start with a letter from A - Z."
);
console.log(
  aliasGen("Anuddanumbha", "23200"),
  "Your name must start with a letter from A - Z."
);
