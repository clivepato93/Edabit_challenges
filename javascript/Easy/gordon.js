// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

function gordon(a) {
  return a
    .replace(/(\w+)/g, "$1" + "!!!!")
    .replace(/[a-z]/g, (letter) => letter.toUpperCase())
    .replace(/[A]/g, "@")
    .replace(/[EIOU]/g, "*");
}

console.log(
  gordon("What feck damn cake"),
  "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
);
console.log(gordon("are you stu pid"), "@R*!!!! Y**!!!! ST*!!!! P*D!!!!");
console.log(gordon("i am a chef"), "*!!!! @M!!!! @!!!! CH*F!!!!");
