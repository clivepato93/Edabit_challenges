// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

function anyArrows(arrows) {
  // arrow it
  return arrows.some((obj) => !obj.damaged);
}

console.log(anyArrows([]), false, "Should handle empty quiver");
console.log(
  anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }]),
  true,
  "Should handle quiver with undamaged arrows"
);
console.log(
  anyArrows([{ range: 10, damaged: true }, { damaged: true }]),
  false,
  "Should handle quiver with damaged arrows"
);
