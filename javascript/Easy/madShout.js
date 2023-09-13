// https://www.codewars.com/kata/63a2928176157931b3945090/train/javascript

function madShout(sidewalk) {
  const distance = sidewalk.indexOf("F") - sidewalk.indexOf("Y");
  return `O${"i".repeat(
    distance <= 2 ? 1 : distance % 2 ? (distance + 1) / 2 : distance / 2
  )} F!`;
}

console.log(madShout("-----------------Y--------F--------------"), "Oiiiii F!");

console.log(madShout("------------Y-F------------------"), "Oi F!");

console.log(madShout("----------YF---------"), "Oi F!");

console.log(
  madShout("------------Y-------------F---------------"),
  "Oiiiiiii F!"
);

console.log(madShout("--------Y----------------F-------"), "Oiiiiiiiii F!");
