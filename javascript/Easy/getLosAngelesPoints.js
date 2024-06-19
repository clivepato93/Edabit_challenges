// https://www.codewars.com/kata/580559b17ab3396c58000abb/train/javascript

function getLosAngelesPoints(results) {
  // your awesome code here
  let total = 0;
  for (let i = 0; i < results.length; i++) {
    if (/Los Angeles [A-Za-z]+/.test(results[i][0])) {
      console.log(results[i][0]);
      const points = results[i][1].split(":")[0];
      total += +points;
    }
  }
  return total;
  x;
}

const basketballResults = [
  ["Golden State Warriors", "559:503"],
  ["Memphis Grizzlies", "550:511"],
  ["Portland Trail Blazers", "527:520"],
  ["Houston Rockets", "494:458"],
  ["San Antonio Spurs", "469:460"],
  ["Phoenix Suns", "523:522"],
  ["Minnesota Timberwolves", "495:494"],
  ["Utah Jazz", "399:402"],
  ["Sacramento Kings", "420:431"],
  ["Denver Nuggets", "646:658"],
  ["Los Angeles Clippers", "382:422"],
  ["Dallas Mavericks", "492:513"],
  ["Los Angeles Lakers", "641:637"],
  ["Oklahoma City Thunder", "315:318"],
  ["New Orleans Pelicans", "433:454"],
];
console.log(getLosAngelesPoints(basketballResults), 1023);
