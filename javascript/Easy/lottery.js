// https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript

function lottery(str) {
  //your code is here...
  const result = str.replace(/[^\d]/g, "");
  let newString = "";
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    if (newString.indexOf(element) == -1) {
      newString = newString + element;
    }
  }
  return !newString ? "One more run!" : newString;
}
