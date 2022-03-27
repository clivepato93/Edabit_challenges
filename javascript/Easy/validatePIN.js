// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    //return true or false
    const result = pin.match(/[0-9]/g)
    const invalids = pin.match(/[^0-9]/g)
    // return result.length==4 ||  result.length==6
    if(!result) return false
    return (result.length == 4 || result.length == 6) && !invalids 
  }


console.log(validatePIN("1"),false, "Wrong output for '1'")
console.log(validatePIN("12"),false, "Wrong output for '12'")
console.log(validatePIN("123"),false, "Wrong output for '123'")
console.log(validatePIN("12345"),false, "Wrong output for '12345'")
console.log(validatePIN("1234567"),false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"),false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"),false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"),false, "Wrong output for '00000000'")
console.log(validatePIN("1234"),true, "Wrong output for '1234'");
console.log(validatePIN("0000"),true, "Wrong output for '0000'");
console.log(validatePIN("1111"),true, "Wrong output for '1111'");