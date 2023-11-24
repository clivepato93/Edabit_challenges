// https://www.codewars.com/kata/583ed487ee36e2a8d20000e8/train/javascript

// function chirp(n, string = "", firstCall = true) {
//   if (firstCall && n > 1) {
//     return chirp(n - 1, "chirp-", (firstCall = false));
//   }
//   if (!n) return string;
//   return chirp(
//     n - 1,
//     (string += n === 1 ? "chirp" : "chirp-"),
//     (firstCall = false)
//   );
// }

// function chirp(n, string = "") {
//   if (!string && n > 1) {
//     return chirp(n - 1, "chirp-");
//   }
//   if (!n) return string;
//   return chirp(n - 1, (string += n === 1 ? "chirp" : "chirp-"));
// }

function chirp(n) {
  console.log([...arguments]);
  return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
}

console.log(chirp(4), "chirp-chirp-chirp-chirp");
console.log(chirp(2), "chirp-chirp");
