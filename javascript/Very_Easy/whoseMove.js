// https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript

function whoseMove(lastPlayer, win) {
  //coding and coding..
  const players = ["white", "black"];
  //   console.log(+win);

  return win
    ? lastPlayer
    : players[players.findIndex((el) => el !== lastPlayer)];
}

console.log(whoseMove("black", false), "white");

console.log(whoseMove("white", true), "white");

console.log(whoseMove("white", false), "black");
