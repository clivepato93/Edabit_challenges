// https://codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript

function bald(x) {
  const newHead = x.match(/\//g)?.length || 0;
  const obj = {
    0: "Clean!",
    1: "Unicorn!",
    2: "Homer!",
    3: "Careless!",
    4: "Careless!",
    5: "Careless!",
  };
  return [x.replace(/\//g, "-"), newHead > 5 ? "Hobo!" : obj[newHead]];
}

console.log(bald("/---------"), ["----------", "Unicorn!"]);
console.log(bald("/-----/-"), ["--------", "Homer!"]);
console.log(bald("--/--/---/-/---"), ["---------------", "Careless!"]);
