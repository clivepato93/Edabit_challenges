


function count (string) {  
    // The function code should be here
    const letters = [...new Set(string)].reduce((ob,v)=> (ob[v]=0,ob),{});
     [...string].forEach((letter)=> letters[letter]+=1)
     return letters
  }


console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {});  