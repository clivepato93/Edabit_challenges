// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript
function movie(card, ticket, perc) {
  let sysA = 0;
  let sysB = card;
  let discountTicket = ticket * perc;
  const originalPrice = ticket;
  let round = 0;
  while (Math.ceil(sysB) >= sysA) {
    sysB += discountTicket;
    sysA += originalPrice;
    discountTicket *= perc;
    round++;
  }

  return round;
}

// console.log(movie(500, 15, 0.9), 43);
console.log(movie(100, 10, 0.95), 24);
