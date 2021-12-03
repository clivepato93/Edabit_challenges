

function convertHTML(str) {
    const entities={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&apos;'}
    return [...str].map(letter=> letter in entities?entities[letter]:letter).join('');
    //.replace(/\W/g,t=>entities[`${t}`])
  }

  function convertHTML(str) {
    const entities={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&apos;'}
    return str.replace(/[<>'"&]/g,t=>entities[t])
  }
  
  console.log( convertHTML("Dolce & Gabbana"));


  function sumPrimes(num) {
    let total=0
    function isPrime(n){
      let c=0
      if(n==1){
        return false
      } 
      for(let number=1;number<=n;number++){
        if(n%number==0){
          c++;
        } if(c>2){
          return false
        }
      } return true
    }
  
    for(let i=1;i<=num+1;i++){
      if(isPrime(i)==true){
        total++;
      }
    }
  
  
    return total;
  }

console.log(sumPrimes(10));

