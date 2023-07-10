// https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

const validateCode = (code) => /^[123]/.test(code);

console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);
