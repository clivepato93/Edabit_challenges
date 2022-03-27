

var countSheep = function (num){
    //your code here
    let string = ''
    for (let i = 0; i < num; i++) {
        string+= `${i+1} sheep...`
    }
    return string
  }

console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");

