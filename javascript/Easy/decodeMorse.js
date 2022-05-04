// https://www.codewars.com/kata/54b724efac3d5402db00065e/discuss/javascript


// complete later
const morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.--.-': 'à',
    '.--.-': 'å',
    '.-.-': 'ä',
    '----': 'ch',
    '.-..-': 'è',
    '..-..': 'é',
    '---.': 'ö',
    '..--': 'ü',
    '...--..': 'ß',
    '--.--': 'ñ',
    '.-.-.-': '.',
    '--..--': ',',
    '---...': ':',
    '-.-.-.': ';',
    '..--..': '?',
    '-....-': '-',
    '..--.-': '_',
    '-.--.': '(',
    '-.--.-': ')',
    '.----.': '\'',
    '-...-': '=',
    '.-.-.': '+',
    '-..-.': '/',
    '.--.-.': '@'
};


function decodeMorse(morse_code){
   const letters = morse_code.split(' ')
//    console.log(letters)
    for (let i = 0; i < letters.length; i++) {
        if(letters[i-1]==' ' && morse.hasOwnProperty(letters[i])==false ){
            console.log('test')
            letters[i] = '';
        }
        else{

            letters[i] = morse[letters[i]]?morse[letters[i]]:' ';
        }
        
    }
    return letters.join('') //.split(' ').filter(word=> word).join(' ')  //.split(' ') //.join(' ')
  }


  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')