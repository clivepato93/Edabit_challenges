// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){
  const rows = []
  if(n%2==0||n<=0) return null
  for (let i = 1; i <= n; i+=2) {
      rows.push('*'.repeat(i))
      
  }

  return rows.join('\n') //+ rows.slice(n-2).reverse().join('\n')
  }

// console.log(diamond(1), "*\n")
console.log(" *\n***\n *\n")
//console.log(diamond(3), " *\n***\n *\n")
// console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
// console.log(diamond(-3), null)
// console.log(diamond(2), null)
// console.log(diamond(0), null)