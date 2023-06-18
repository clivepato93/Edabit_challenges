// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

const cannonsReady = (gunners) => {
  // Object Object.values method
  // Object.values method used to return an array of the object values
  // Then used the set constructor to check if there's only one single value to determine the result
  const values = new Set(Object.values(gunners));
  return values.size > 1 ? "Shiver me timbers!" : "Fire!";
};

let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

console.log(cannonsReady(a), "Fire!");

console.log(cannonsReady(b), "Shiver me timbers!");
