// https://www.codewars.com/kata/58de08d376f875dbb40000f1/train/javascript

function premierLeagueStandings(teamStandings) {
  // Insert Code here
  const obj = {};
  obj[1] = teamStandings[1];
  console.log(obj);
  const teams = Object.values(teamStandings).slice(1).sort();
  for (let i = 0; i < teams.length; i++) {
    obj[i + 2] = teams[i];
  }

  return obj;
}

console.log(
  premierLeagueStandings({ 1: "Arsenal" }),
  { 1: "Arsenal" },
  "Should return Arsenal as position 1"
);
console.log(
  premierLeagueStandings({
    2: "Arsenal",
    3: "Accrington Stanley",
    1: "Leeds United",
  }),
  { 3: "Arsenal", 2: "Accrington Stanley", 1: "Leeds United" },
  "Should return team in position 1 last season as #1 and all other teams in alphabetical order!"
);
console.log(
  premierLeagueStandings({
    1: "Leeds United",
    2: "Liverpool",
    3: "Manchester City",
    4: "Coventry",
    5: "Arsenal",
  }),
  {
    1: "Leeds United",
    2: "Arsenal",
    3: "Coventry",
    4: "Liverpool",
    5: "Manchester City",
  },
  "Should return team in position 1 last season as #1 and all other teams in alphabetical order!"
);
