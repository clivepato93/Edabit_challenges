// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  //Code goes here!
  const middle = Math.floor(s.length/2)
  return s.length%2==0? s.slice(middle-1,middle+1): s.slice(middle,middle+1)
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");