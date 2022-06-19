// https://www.codewars.com/kata/62a933d6d6deb7001093de16/train/javascript

// || vowels.indexOf( word[i]) != vowels.indexOf(vowels[i]
function getTheVowels(word) {
    const vowels = ['a','e','i','o','u']
    let y=0
    let x ='';
    for (let i = 0; i < word.length; i++) {
        if(y>4 || vowels.includes( word[i]) && vowels.indexOf(word[i])!= y ) y=0

        if(word[i]==vowels[y]){
            x+=word[i]
            y++;
        }
        
    }
    return x;
  }

console.log(getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie"), 7, "aeioua");