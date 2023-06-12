// www.codewars.com/kata/582dafb611d576b745000b74/solutions/javascript

var quote = function (fighter) {
  // your code here
  return {
    "george saint pierre": "I am not impressed by your performance.",
    "conor mcgregor":
      "I'd like to take this chance to apologize.. To absolutely NOBODY!",
  }[fighter.toLowerCase()];
};

console.log(
  quote("george saint pierre"),
  "I am not impressed by your performance."
);
console.log(
  quote("conor mcgregor"),
  "I'd like to take this chance to apologize.. To absolutely NOBODY!"
);

console.log(
  quote("George Saint Pierre"),
  "I am not impressed by your performance."
);
console.log(
  quote("Conor McGregor"),
  "I'd like to take this chance to apologize.. To absolutely NOBODY!"
);

console.log(Number("3 4"));
