// https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript


// solution I liked 

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// my solution

function fakeBin(x){
  return [...x].map(el=> el < 5 ? 0 : 1).join('')

}