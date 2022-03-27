

function removeUrlAnchor(url){
    // TODO: complete
    return url.slice(0,url.indexOf('#')===-1?url.length:url.indexOf('#'))
  }

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')