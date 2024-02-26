// https://www.codewars.com/kata/5bc73331797b005d18000255/train/javascript
//REFACTOR
function drawSpider(legSize, bodySize, mouth, eye) {
  console.log(arguments);
  const legs = { 1: "^", 2: "/\\", 3: "/╲", 4: "╱╲" };
  const body = {
    1: `(${eye.repeat(2 ** (bodySize - 1))}${mouth}${eye.repeat(
      2 ** (bodySize - 1)
    )})`,
    2: `((${eye.repeat(2 ** (bodySize - 1))}${mouth}${eye.repeat(
      2 ** (bodySize - 1)
    )}))`,
    3: `(((${eye.repeat(2 ** (bodySize - 1))}${mouth}${eye.repeat(
      2 ** (bodySize - 1)
    )})))`,
  };
  if (legSize == 3) {
    return "/╲" + body[bodySize] + "╱\\";
  }
  return legs[legSize] + body[bodySize] + legs[legSize];
}

function drawSpider(legSize, bodySize, mouth, eye) {
  const repeater = 2 ** (bodySize - 1);
  const legs = { 1: "^", 2: "/\\", 3: "/╲", 4: "╱╲" };
  const body = {
    1: `(${eye.repeat(repeater)}${mouth}${eye.repeat(repeater)})`,
    2: `((${eye.repeat(repeater)}${mouth}${eye.repeat(repeater)}))`,
    3: `(((${eye.repeat(repeater)}${mouth}${eye.repeat(repeater)})))`,
  };
  if (legSize == 3) {
    return legs[legSize] + body[bodySize] + "╱\\";
  }
  return legs[legSize] + body[bodySize] + legs[legSize];
}
console.log(drawSpider(1, 1, "W", "o"), "^(oWo)^");
console.log(drawSpider(2, 2, "w", "O"), "/\\((OOwOO))/\\");
console.log(drawSpider(3, 3, "w", "0"), "/╲(((0000w0000)))╱\\");
