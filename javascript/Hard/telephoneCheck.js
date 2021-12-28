// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
    return (/^[1\s]*(\([0-9]{3}\) *|[0-9]{3}[-\s]*)[0-9]{3}[-\s]*[0-9]{4}$/).test(str);
}
  
  

console.log(telephoneCheck("555-555-5555"));


// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.