

function list(names){
    const n = names.map(el=> el.name)
    const joiner = n.slice(0,n.length-2).join(', ')
  //  console.log(joiner)
    return joiner!=''?`${joiner}, `+n.slice(n.length-2).join(' & '):''+n.slice(n.length-2).join(' & ')
    //n.length == 1 ? n[0]: n.length ==2 ?`${n.join(' & ')}`: n.length >2 ? 
    //`${n.slice(0,n.length-2).join(, )} ${n.slice(n.length-2).join(' & ')}`:'';
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
console.log(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")

