//https://www.codewars.com/kata/55849d76acd73f6cc4000087/solutions/javascript
// &&
function playerRankUp(points) {
  return (
    points >= 100 &&
    "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  );
}

console.log(playerRankUp(64), false);
console.log(
  playerRankUp(101),
  "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
);
