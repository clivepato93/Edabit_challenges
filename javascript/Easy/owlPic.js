// https://www.codewars.com/kata/55aa7acc42216b3dd6000022/train/javascript

function owlPic(text) {
  // ...
  const letters = [...text].map((letter) =>
    /[8WTYUIOAHXVM]/i.test(letter) ? letter.toUpperCase() : ""
  );
  return letters.join("") + "''0v0''" + letters.reverse().join("");
}

console.log(owlPic("kuawd6r8q27y87t93r76352475437"), "UAW8Y8T''0v0''T8Y8WAU");
console.log(owlPic("t6ggggggggWw"), "TWW''0v0''WWT");
