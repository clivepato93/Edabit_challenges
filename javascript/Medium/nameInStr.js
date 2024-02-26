// https://www.codewars.com/kata/59daf400beec9780a9000045/train/javascript

function nameInStr(str, name) {
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      index != name.length &&
      str[i].toLowerCase() == name[index].toLowerCase()
    ) {
      index++;
    }
  }
  return index == name.length;
}

console.log(nameInStr("Across the rivers", "chris"), true);
console.log(nameInStr("Next to a lake", "chris"), false);
console.log(nameInStr("Under a sea", "chris"), false);
console.log(nameInStr("A crew that boards the ship", "chris"), false);
console.log(nameInStr("A live son", "Allison"), false);
