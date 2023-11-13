// https://www.codewars.com/kata/57061b6fcb7293901a000ac7/train/javascript

function headSmash(array) {
  // This is gonna hurt!
  console.log(array);
  if (typeof array === "number") {
    console.log("test");
    return "This isn't the gym!!";
  }
  return array.length
    ? array.map((row) => row.replace(/O/g, " "))
    : "Gym is empty";
}
