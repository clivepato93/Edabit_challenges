// https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript
function rpsls(pl1, pl2) {
  if (pl1 === pl2) return "Draw!";
  const options = [
    "rock" + "lizard",
    "paper" + "rock",
    "scissors" + "lizard",
    "lizard" + "paper",
    "spock" + "rock",
    "spock" + "scissors",
    "lizard" + "spock",
    "scissors" + "paper",
    "paper" + "spock",
    "rock" + "scissors",
  ];

  if (options.indexOf(pl1 + pl2) !== -1) return "Player 1 Won!";
  return "Player 2 Won!";
}

console.log(rpsls("rock", "lizard"), "Player 1 Won!");
console.log(rpsls("paper", "rock"), "Player 1 Won!");
console.log(rpsls("scissors", "lizard"), "Player 1 Won!");
console.log(rpsls("lizard", "paper"), "Player 1 Won!");
console.log(rpsls("spock", "rock"), "Player 1 Won!");

console.log(rpsls("lizard", "scissors"), "Player 2 Won!");
console.log(rpsls("spock", "lizard"), "Player 2 Won!");
console.log(rpsls("paper", "lizard"), "Player 2 Won!");
console.log(rpsls("scissors", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "spock"), "Player 2 Won!");

// console.log(rpsls("rock", "rock"), "Draw!");
// console.log(rpsls("spock", "spock"), "Draw!");
