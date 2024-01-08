// https://www.codewars.com/kata/58902f676f4873338700011f/train/javascript

function isLucky(ticket) {
  if (ticket.length != 6) return false;
  const [front, back] = [ticket.slice(0, 3), ticket.slice(-3)];
  if (/^\d+$/g.test(front) == false || /^\d+$/g.test(back) == false)
    return false;
  return (
    eval(front.replace(/(.)(.)(.)/, "$1+$2+$3")) ==
    eval(back.replace(/(.)(.)(.)/, "$1+$2+$3"))
  );
}

// console.log(isLucky("123321"), true);
// console.log(isLucky("100001"), true);
// console.log(isLucky("100200"), false);
// console.log(isLucky("12341234"), false);
// console.log(isLucky("12a12a"), false);
console.log(isLucky(""), false);
