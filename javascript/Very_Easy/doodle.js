/*
let a = { id: 1 };
let b = a;
b.id = 2;
console.log(a);
*/

// const nestedObject = {
//   flag: "🇨🇦",
//   country: {
//     city: "vancouver",
//   },
// };

// const shallowClone = { ...nestedObject };

// Changed our cloned object
// shallowClone.flag = "🇹🇼";
// shallowClone.country.city = "taipei";

// console.log(shallowClone);
// {country: '🇹🇼', {city: 'taipei'}}

// console.log(nestedObject);
// {country: '🇨🇦', {city: 'taipei'}} <-- 😱

// const deepClone = JSON.parse(JSON.stringify(nestedObject));
// deepClone.flag = "🇹🇼";
// deepClone.country.city = "taipei";
// console.log(deepClone);
// {country: '🇹🇼', {city: 'taipei'}}

// console.log(nestedObject);
// {country: '🇨🇦', {city: 'vancouver'}} <-- ✅

// const a = null;
// const b = null;

// console.log(a == b, !NaN);
console.log(!!true);

const a = [1, 2, 3];
const b = "1,2,3";
console.log(a == b); //

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
console.log(c == d);
