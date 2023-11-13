// https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/train/javascript

function findChildren(santasList, children) {
  // Your code
  return [
    ...new Set(children.filter((child) => santasList.includes(child))),
  ].sort();
}

console.log(
  findChildren(
    ["Jason", "Jackson", "Jordan", "Johnny"],
    ["Jason", "Jordan", "Jennifer"]
  ),
  ["Jason", "Jordan"]
);

console.log(
  findChildren(
    ["jASon", "JAsoN", "JaSON", "jasON"],
    ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]
  ),
  ["JAsoN", "jASon"]
);

console.log(
  findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]),
  ["James", "Jason"]
);
