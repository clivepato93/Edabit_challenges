// https://www.codewars.com/kata/594946120f7b28c70300008d/train/javascript
/*
I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, 

with only the last letter of each item capitalized.

If the item is a single letter word and not capitilized

when I give it to you, do not capitalize it.
*/
function flipper(stringArr) {
  let final = "";
  for (let index = stringArr.length - 1; index >= 0; index--) {
    const element =
      stringArr[index].length > 1
        ? stringArr[index].slice(0, stringArr[index].length - 1).toLowerCase() +
          stringArr[index].slice(-1).toUpperCase()
        : stringArr[index];
    // console.log(element);
    if (index == stringArr.length - 1) {
      final = element;
    } else {
      final = final + ` ${element}`;
    }
    // final = index==stringArr.length-1?
  }
  return final;
}

function flipper(stringArr, i = 0) {
  if (i == stringArr.length) {
    return "";
  }

  let final = flipper(stringArr, i + 1);

  debugger;
  const element =
    stringArr[i].length > 1
      ? stringArr[i].slice(0, stringArr[i].length - 1).toLowerCase() +
        stringArr[i].slice(-1).toUpperCase()
      : stringArr[i];
  // console.log(element);

  final = i == stringArr.length - 1 ? element : final + ` ${element}`;

  return final;
}

console.log(
  flipper([
    "This",
    "Is",
    "a",
    "Test",
    "This",
    "Is",
    "A",
    "Test",
    "This",
    "Is",
    "A",
    "Test",

    "This",
    "Is",
    "A",
    "Test",
  ]),
  "tesT a iS thiS"
);
