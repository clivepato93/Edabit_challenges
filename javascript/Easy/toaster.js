

// function t(b){
    // console.log(b)
    // o ={'w b':1,'b b':2, 'f w b': 1.5, 'f b b':3}
    // b.replace(/bread/i,'b').replace(/frozen/i,'f').replace(/white/i,'w').replace(/brown/i,'b')
    // a=b.match(/bread|frozen|white|brown/ig) ? true : false
    // return c >1? c +' mins': c +' min'
    // console.log(a)
    // b=b.replaceAll(/bread/i,'b').replace(/frozen/i,'f').replace(/white/i,'w').replace(/brown/i,'b')
//   }
// will come back to it 

  function toaster(b){ o ={'wb':1,'bb':2,'fwb':1.5,'fbb':3}
  (/white/i).test(b)&&(/brown/i).test(b) ? 
  b = b.split(' ').map(el=> el.slice(0,1)).join(' ')
  
  return !o[b]?"Please do not put that in the toaster!": o[b] >1 ? o[b]+' mins' : o[b] + ' min'



}


// console.log(toaster("white bread"),"1 min");
console.log(toaster("frozen white bread"),"1.5 mins");
console.log(toaster("brown bread"),"2 mins");
console.log(toaster("frozen brown bread"),"3 mins");