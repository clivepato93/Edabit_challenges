//https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
// OOP
const Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][
    Math.floor(Math.random() * 4)
  ];
};

console.log(new Ghost().color);
