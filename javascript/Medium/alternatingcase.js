// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function (callback) {
    // Define your method here :)
    const newLetter=(letter)=> {
        if(letter.charCodeAt(0)>=65|| letter.charCodeAt(0)<=90) return letter.toUpperCase();
        else if(letter.charCodeAt(0)>=97|| letter.charCodeAt(0)<=122)return letter.toLowerCase();
        return letter
    }
    const newWord = [];
    for(let i=0;this.length;i++){
        newWord.push(newLetter( this[i]))
    //   console.log(newWord.push(newLetter( this[i])))
    }
    return newWord.join('')
  }
  
  // const