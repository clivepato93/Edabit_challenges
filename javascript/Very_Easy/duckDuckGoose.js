//www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript

function duckDuckGoose(players, goose) {
  // ...
  return players[(goose - 1) % players.length].name;
}
class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));
console.log(duckDuckGoose(players, 1), "a");
console.log(duckDuckGoose(players, 3), "c");
