// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    return str.split(/\-|\_/g).map((el,i)=> {
        if(!i&&str.slice(0,1).toUpperCase()!==str.slice(0,1)) return el

        return el.slice(0,1).toUpperCase()+el.slice(1)
    }).join('')
}

// better solution
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

console.log(toCamelCase(''), '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
