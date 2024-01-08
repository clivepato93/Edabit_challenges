// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

function to_nato(words) {
  // Go code
  const arr = words.replace(/\s/g, "").split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      console.log("test");
      arr[i] = "";
      //       console.log(arr[i])
    } else {
      arr[i] = arr[i].replace(/[a-z]/i, (w) => NATO[w.toLowerCase()]);
    }
  }

  return arr.join(" ");
}

console.log(
  to_nato("If you can read"),
  "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
);
console.log(
  to_nato("Did not see that coming"),
  "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
);
console.log(
  to_nato("go for it!"),
  "Golf Oscar Foxtrot Oscar Romeo India Tango !"
);
