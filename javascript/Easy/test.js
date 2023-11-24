function assert(condition, message) {
  if (condition) {
    console.log(message);
  }
  return "test failed";
}
function useless(ninjaCallback) {
  return ninjaCallback();
}
function report(info) {
  console.log(info);
}
var text = "Domo arigato!";
// report("Before defining functions");
function useless(ninjaCallback) {
  // report("In useless function");
  return ninjaCallback();
}
function getText() {
  report("In getText function");
  return text;
}

// report("Before making all the calls");
// assert(useless(getText) === text, "The useless function works! " + text);
// report("After the calls have been made");

// assert(
//   useless(function () {
//     return text;
//   }) === text,
//   "The useless function works! " + text
// );

var ninja = {};
ninja.name = "hitsuke";
var wieldSword = function () {};
wieldSword.swordType = "katana";

// console.log(wieldSword.swordType);

function f() {
  console.log(typeof [...arguments]);
  return typeof [...arguments];
}
var args = f("a", "b", "c");
console.log(args.length);
// 3;
console.log(args[0]); // read element at index 0 "a";

function getPerson(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }
  return { id: id }; // normally: retrieved from database
}
function getPersons(ids) {
  var result = [];
  ids.forEach(function (id) {
    try {
      var person = getPerson(id);
      result.push(person);
    } catch (exception) {
      console.log(exception.message);
    }
  });
  return result;
}

console.log(getPersons([2, -5, 137]));

var result = [];
for (var i = 0; i < 5; i++) {
  result.push(function () {
    return i;
  });
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)
