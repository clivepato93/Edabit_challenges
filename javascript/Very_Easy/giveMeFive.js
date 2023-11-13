// for in loop objects

function giveMeFive(obj) {
  //coding here
  const arr = [];
  for (const key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }), [
  "earth",
  "world",
]);
console.log(
  giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }),
  ["Ihave", "money", "model"]
);
console.log(giveMeFive({ Pears: "than", apple: "sweet" }), [
  "Pears",
  "apple",
  "sweet",
]);
