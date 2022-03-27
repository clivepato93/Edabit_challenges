

function printerError(s) {
    // your code
  const errors = [...s].reduce((t,c)=> c.charCodeAt(0)>=97&&c.charCodeAt(0)<=109? t+=1:t,0)
  return `${s.length-errors}/${s.length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'), "3/56")