// https://www.codewars.com/kata/56e9ac87c3e7d512bc001363/train/javascript

const asciiCodeLetter = (mode,letter,i)=>{ 
    if(mode=='encrypt'){
        return String.fromCharCode(letter.charCodeAt(0)+i)
    }
    return String.fromCharCode(letter.charCodeAt(0)-i)
}

function asciiEncrypt(plaintext) {
    return [...plaintext].map((letter,index)=> asciiCodeLetter('encrypt',letter,index)).join('') 
};
    
function asciiDecrypt(ciphertext) {
    return [...ciphertext].map((letter,index)=>  asciiCodeLetter('decrypt',letter,index)).join('') 
};

console.log(asciiEncrypt("PASSWORD"), "PBUV[TXK", "Encryption is incorrect")
console.log(asciiDecrypt("PBUV[TXK"), "PASSWORD", "Decryption is incorrect")
console.log(asciiDecrypt(asciiEncrypt("PASSWORD")), "PASSWORD", "The decryption should be able to reverse the encryption")
