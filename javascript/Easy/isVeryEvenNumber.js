


function isVeryEvenNumber(n) {
    // console.log(n)
    const x = `${n}`
    if(n%2==0 && x.length==1) return true
    if(n%2==1 && x.length==1) return false
    else return isVeryEvenNumber([...`${n}`].reduce((t,c)=> t+ +c,0))
  }

  const inputs =    [0,    4,    12,    222,  5,     45,    4554,  1234,  88,    24,   400000220];

inputs.forEach(num=> console.log( isVeryEvenNumber(num)))