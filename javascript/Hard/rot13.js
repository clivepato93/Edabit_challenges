
function rot13(message){
    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const x = [...message].map(el=> {
        // (/[a-zA-Z]/).test(el)
        if(lowerAlph.includes(el)) return lowerAlph[(lowerAlph.indexOf(el)+13)%26]
        // ?String.fromCharCode((el.charCodeAt(0)+13)):el
        else if(upperCaseAlp.includes(el)) return upperCaseAlp[(upperCaseAlp.indexOf(el)+13)%26]
        else return el
    })
    return x.join('')
  }

console.log(rot13('test'))