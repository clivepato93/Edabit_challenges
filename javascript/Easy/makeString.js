// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/solutions/javascript/me/best_practice

function makeString(s){
    // ...
    return s.split(' ').map(el=> el.slice(0,1)).join('')
  }

  console.log(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'")
  console.log(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'")
  console.log(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'")
  console.log(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'")
  