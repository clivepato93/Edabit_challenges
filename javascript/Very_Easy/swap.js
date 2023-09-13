// https://edabit.com/challenge/CCGBig9eRPFzAHv46
function swap(a, b) {
  a, (b = b), a;
  return [b, a];
}

//https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript

function swap(string) {
  return [...string]
    .map((letter) => (/[aeiou]/.test(letter) ? letter.toUpperCase() : letter))
    .join("");
}

/* replace function iterating through the string
The "g" at the end of the RegEx stands for "Global Search",
which looks at all characters inside the string no matter their position.
So, the second part of the replace method is an arrow function, which 
executes when the replace method has found a vowel (in this case)... 
and then it just changes that specific vowel (v) to v.toUpperCase()
and keeps searching the string until it finishes.

Not my function

*/
function swap(st) {
  return st.replace(/[aeiou]/g, (v) => v.toUpperCase());
}

console.log(swap("HelloWorld!"), "HEllOWOrld!");
