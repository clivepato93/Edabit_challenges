// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript
var AmIAfraid = function (day, num) {
  //Help me...
  const obj = {
    Monday: function (num) {
      return num == 12;
    },
    Tuesday: function (num) {
      return num > 95;
    },
    Wednesday: function (num) {
      return num === 34;
    },
    Thursday: function (num) {
      return num === 0;
    },
    Friday: function (num) {
      return num % 2 === 0;
    },
    Saturday: function (num) {
      return num === 56;
    },
    Sunday: function (num) {
      return num === 666 || num === -666;
    },
  };

  return obj[day](num);
};

console.log(AmIAfraid("Monday", 13), false, "Should return false");
console.log(AmIAfraid("Sunday", -666), true, "Should return true");
console.log(AmIAfraid("Tuesday", 2), false, "Should return false");
console.log(AmIAfraid("Tuesday", 965), true, "Should return true");
console.log(AmIAfraid("Friday", 2), true, "Should return true");