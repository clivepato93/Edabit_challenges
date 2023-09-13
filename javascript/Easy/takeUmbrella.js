// https://www.codewars.com/kata/5865a28fa5f191d35f0000f8/train/javascript

function takeUmbrella(weather, chance) {
  //code here
  return (
    weather == "rainy" || (weather == "cloudy" && chance > 0.2) || chance > 0.5
  );
}
console.log(takeUmbrella("sunny", 0.4), false);
console.log(takeUmbrella("rainy", 0), true);
console.log(takeUmbrella("cloudy", 0.2), false);
