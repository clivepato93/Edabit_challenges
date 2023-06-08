// function findCaterer(budget, people) {
//   let final = -1;
//   const discount = ((people * 30) / 100) * 20;
//   if (!people) {
//     return final;
//   }
//   const options = [
//     people * 15,
//     people * 20,
//     people > 60 ? people * 30 - discount : 30 * people,
//   ];
//   //   console.log(options);
//   for (let index = 0; index < options.length; index++) {
//     if (options[index] === budget) {
//       return index + 1;
//     }

//     if (options[index] < budget) {
//       final = index + 1;
//     }
//   }
//   return final;
// }

function findCaterer(budget, people) {
  //   let final = -1;
  const discount = ((people * 30) / 100) * 20;
  //   if (!people) {
  //     return final;
  //   }

  const options = [
    people * 15,
    people * 20,
    people > 60 ? people * 30 - discount : 30 * people,
  ];
  console.log(budget, options);
  console.log(options.find((num) => num == budget || num < budget));
  return options.findIndex((num) => num == budget || num <= budget);
}

console.log(findCaterer(150, 10), 1);

console.log(findCaterer(1500, 60), 2);

console.log(findCaterer(1500, 61), 3);

console.log(findCaterer(100, 0), -1);

console.log(findCaterer(200, 5), 3);

console.log(findCaterer(1000, 45), 2);

console.log(findCaterer(940, 70), -1);
