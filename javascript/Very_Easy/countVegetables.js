// https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/javascript

function countVegetables(string) {
  //your code here

  const veggies = string.split(" ");
  //   Object.fromEntries;
  const veg = Object.fromEntries(string.split(" ").map((veg) => [veg, 0]));
  for (let i = 0; i < veggies.length; i++) {
    if (veggies[i] !== "chopsticks") veg[veggies[i]] += 1;
    else {
      delete veg["chopsticks"];
    }
  }
  return Object.entries(veg)
    .map((entry) => entry.reverse())
    .sort((a, b) => {
      const [num1, name1] = a;
      const [num2, name2] = b;
      if (num1 > num2) return -1;
      if (num1 === num2) {
        return name2.localeCompare(name1);
      }
      return 0;
    });
}

let s1 =
  "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
let lst1 = [
  [2, "tofu"],
  [2, "potato"],
  [2, "cucumber"],
  [2, "cabbage"],
  [1, "turnip"],
  [1, "pepper"],
  [1, "onion"],
  [1, "mushroom"],
  [1, "celery"],
  [1, "carrot"],
];
// console.log(countVegetables(s1), lst1);

let lst2 = [
  [15, "turnip"],
  [15, "mushroom"],
  [13, "cabbage"],
  [10, "carrot"],
  [9, "potato"],
  [7, "onion"],
  [6, "tofu"],
  [6, "pepper"],
  [5, "cucumber"],
  [4, "celery"],
];
let s2 =
  "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
  "mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
  "onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
  "onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
  "potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
  "mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip";
console.log(countVegetables(s2), lst2);
