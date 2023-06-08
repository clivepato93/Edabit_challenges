// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
function uefaEuro2016(teams, scores) {
  // your code...
  const teamsString = `At match ${teams.join(" - ")}`;
  if (scores.every((number) => number === scores[0])) {
    return teamsString + ", teams played draw.";
  }
  const winningTeam = teams[scores.indexOf(Math.max(...scores))];
  return teamsString + `, ${winningTeam} won!`;
}

console.log(
  uefaEuro2016(["Germany", "Ukraine"], [2, 0]),
  "At match Germany - Ukraine, Germany won!"
);
console.log(
  uefaEuro2016(["Belgium", "Italy"], [0, 2]),
  "At match Belgium - Italy, Italy won!"
);
console.log(
  uefaEuro2016(["Portugal", "Iceland"], [1, 1]),
  "At match Portugal - Iceland, teams played draw."
);
