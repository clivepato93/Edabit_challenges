//https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

/**
 Regex useful tips 
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
function validateUsr(username) {
  res = /^[a-z\d_]{4,16}$/.test(username);
  return res;
}

console.log(validateUsr("asddsa"), true);
console.log(validateUsr("a"), false);
console.log(validateUsr("Hass"), false);
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"), false);
console.log(validateUsr(""), false);
console.log(validateUsr("____"), true);
console.log(validateUsr("012"), false);
console.log(validateUsr("p1pp1"), true);
console.log(validateUsr("asd43 34"), false);
console.log(validateUsr("asd43_34"), true);
