// https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript

//string
function proofread(str) {
  return (
    str[0] +
    str
      .slice(1)
      .toLowerCase()
      .replace(/ie/g, "ei")
      .replace(/\. [a-z]/g, (match) => match.toUpperCase())
  );
}

console.log(
  proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."),
  "Their deceit was inconceivable. She seized the moment."
);

// console.log(
//   proofread("HIs nieghBOur wAs oVerwieGht."),
//   "His neighbour was overweight."
// );
// console.log(proofread("SHe rEcieveD a pIegNor."), "She received a peignor.");

// console.log(proofread("ShE deCIeved HiM."));
