//www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
//preload variable: dict
var makeBackronym = function (string) {
  //your code here
  return [...string].map((letter) => dict[letter.toUpperCase()]).join(" ");
};
