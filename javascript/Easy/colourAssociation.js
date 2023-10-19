// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript
// converting array to object
function colourAssociation(array) {
  // We <3 colours..
  return array.map((entry) => {
    const [a, b] = entry;
    // const b = entry[1];
    const obj = {};
    obj[a] = b;
    return obj;
  });
}

// other solutions

// const colourAssociation = (array) =>
//   array.map((value) => Object.fromEntries([value]));

console.log(
  colourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ]),
  [{ white: "goodness" }, { blue: "tranquility" }]
);
console.log(
  colourAssociation([
    ["red", "energy"],
    ["yellow", "creativity"],
    ["brown", "friendly"],
    ["green", "growth"],
  ]),
  [
    { red: "energy" },
    { yellow: "creativity" },
    { brown: "friendly" },
    { green: "growth" },
  ]
);
