//www.codewars.com/kata/56c19316e8b139dff60006da/train/javascript

// prototype OOP
String.prototype.capitalize = function () {
  // this is the string

  /* charCodeAt() method returns the Unicode(integer) value of the character 
  at a specified index (position) in a string.
  */
  const x = this.slice(0, 1).charCodeAt(0);

  return String.fromCharCode(x <= 90 ? x : x - 32) + this.slice(1);
};

console.log("hello world".capitalize(), "Hello world");
console.log(
  "an apple a day keeps the doctor away".capitalize(),
  "An apple a day keeps the doctor away"
);
console.log(
  "today, I have a dream ... ".capitalize(),
  "Today, I have a dream ... "
);
console.log(
  "hello how are you?  i am john doe".capitalize(),
  "Hello how are you?  I am John Doe",
  "You were not asked to correct all of the capitalization errors in the string."
);
