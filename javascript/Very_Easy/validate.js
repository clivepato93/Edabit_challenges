//https://www.codewars.com/kata/55e4c52ad58df7509c00007e/train/javascript

// debugging
// original code
// /\/\/|\|\|/.test(str)

// function validate(username, password) {
//   var database = new Database();
//   return database.login(username, password);
// }

function validate(username, password) {
  return password.indexOf("||") > -1 || password.indexOf("//") > -1
    ? "Wrong username or password!"
    : new Database().login(username, password);
}

console.log(
  validate("Timmy", "password"),
  "Successfully Logged in!",
  "Should successfully login!"
);
console.log(
  validate("Timmy", "h4x0r"),
  "Wrong username or password!",
  "The password was wrong"
);
console.log(
  validate("Alice", "alice"),
  "Successfully Logged in!",
  "Should successfully login!"
);
console.log(
  validate("Timmy", 'password"||""=="'),
  "Wrong username or password!",
  "Should fail to login because of injected code"
);
console.log(
  validate("Admin", 'gs5bw"||1==1//'),
  "Wrong username or password!",
  "Should fail to login because of injected code"
);
