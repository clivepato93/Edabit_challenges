// https://www.codewars.com/kata/57a93f93bb9944516d0000c1/train/javascript

class Dictionary {
  constructor() {
    // your code
    this.entries = [];
  }

  newEntry(key, value) {
    // your code

    this.entries.push([key, value]);
    // console.log(this.entries);
  }

  look(key) {
    // your code
    return this.entries.find((x) => x[0] === key)
      ? this.entries.find((x) => x[0] === key)[1]
      : `Can't find entry for A ${key}`;
  }
}

let d = new Dictionary();
d.newEntry("Apple", "A fruit");
console.log(d.look("A"), "A fruit");
