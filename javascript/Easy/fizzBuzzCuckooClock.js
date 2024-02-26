// https://www.codewars.com/kata/58485a43d750d23bad0000e6/train/javascript

function fizzBuzzCuckooClock(time) {
  // your code here
  const [hour, mins] = time.split(":").map(Number);
  const c = "Cuckoo ";
  if (mins == 0) {
    return c
      .repeat(hour == 0 ? 12 : hour <= 12 ? hour : hour % 12)
      .slice(0, -1);
  }
  if (mins == 30) {
    return c.slice(0, -1);
  }
  if (mins % 3 == 0 && mins % 5 == 0) {
    return "Fizz Buzz";
  }

  if (mins % 5 == 0) {
    return "Buzz";
  }

  if (mins % 3 == 0) {
    return "Fizz";
  }
  return "tick";
}
