// www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

function killer(suspectInfo, dead) {
  dead.sort();
  const keys = Object.keys(suspectInfo);
  for (let i = 0; i < keys.length; i++) {
    if (suspectInfo[keys[i]].sort().indexOf(...dead) !== -1) return keys[i];
  }
}

console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  ),
  "James"
);

console.log(
  killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]),
  "Megan"
);
