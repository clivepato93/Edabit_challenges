// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
    // Code me to return true or false
    const n = [...`${value}`].map(Number);
    return [...`${value}`].map(Number).reduce((t,c)=> t+ c**n.length ,0)==value
  }


console.log(narcissistic( 7 ), true, "7 is narcissistic" );

console.log(narcissistic( 371 ), true, "371 is narcissistic" );