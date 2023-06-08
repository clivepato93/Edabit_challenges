// www.codewars.com/kata/52a723508a4d96c6c90005ba/train/javascript

var sing = function () {
  // return the lyrics as a string ...
  const bottles = [];
  for (let index = 99; index > -1; index--) {
    if (index > 0) {
      bottles.push(
        `${index} ${
          index === 1 ? "bottle" : "bottles"
        } of beer on the wall, ${index} ${
          index === 1 ? "bottle" : "bottles"
        } of beer.`,
        `Take one down and pass it around, ${
          index - 1 === 0 ? "no more" : index - 1
        } ${index - 1 === 1 ? "bottle" : "bottles"} of beer on the wall.`
      );
    } else {
      bottles.push(
        "No more bottles of beer on the wall, no more bottles of beer.",
        "Go to the store and buy some more, 99 bottles of beer on the wall."
      );
    }
    //     console.log(bottles);
  }

  return bottles;
};

const song = sing();

// console.log(song[0], "99 bottles of beer on the wall, 99 bottles of beer.");
// console.log(
//   song[199],
//   "Go to the store and buy some more, 99 bottles of beer on the wall."
// );
// console.log(
//   song[194]
//   "Take one down and pass it around, 1 bottle of beer on the wall."
// );
console.log(
  song[195],
  "Take one down and pass it around, 1 bottle of beer on the wall."
);
