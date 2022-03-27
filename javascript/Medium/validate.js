// codewars.com/kata/52e1476c8147a7547a000811/train/javascript

// function validate(password) {
//     let [lower,upper,digit] = [0,0,0]
//     for (let i = 0; i < password.length; i++) {
//         if(/[a-z]/.test(password[i])){
//             lower++;
//         }
//         else if(/[A-Z]/.test(password[i])){
//             upper++;
//         }
//         else if(/[0-9]/.test(password[i])){
//             digit++;
//         }
//         else{
//             return false
//         }
        
//     }

//     return (lower>0&&upper>0&&digit>0)&&(lower+digit+upper)>=6
//   }

//   /[a-z|A-Z|0-9]/.test(password[i])
//   (/^[1\s]*(\([0-9]{3}\) *|[0-9]{3}[-\s]*)[0-9]{3}[-\s]*[0-9]{4}$/).test(str);
//[A-Z]{1,}&&[0-9]{1,}){6,}
// (?=[a-zA-Z0-9]){6,}
// ^[a-z]{1}|^[A-Z]{1}^[0-9]{1}
//(?=\D*\d{1,})
function validate(password) {


    return //.test(password);

  }


console.log(validate('djI38D55'), 'djI38D55 - Expected true');
console.log(validate('a2.d412'), 'a2.d412 - Expected false');
console.log(validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
console.log(validate('!fdjn345'), '!fdjn345 - Expected false');
console.log(validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
console.log(validate('123'), '123 - Expected false');
console.log(validate('abc'), 'abc - Expected false');
console.log(validate('Password123'), 'Password123 - Expected true');

// console.log(validate('djI38D55'), 'djI38D55 - Expected true');
// console.log(validate('a2.d412'), 'a2.d412 - Expected false');
// console.log(validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
// console.log(validate('!fdjn345'), '!fdjn345 - Expected false');
// console.log(validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
// console.log(validate('123'), '123 - Expected false');
// console.log(validate('abc'), 'abc - Expected false');
// console.log(validate('Password123'), 'Password123 - Expected true');