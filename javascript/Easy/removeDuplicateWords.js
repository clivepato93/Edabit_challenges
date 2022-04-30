// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

function removeDuplicateWords (s) {
    // your perfect code...
    const words = s.split(' ');
    const reducedSentence = [];
    words.forEach(word => {
        if(! reducedSentence.includes(word)){
            reducedSentence.push(word)
        }
    });

    return reducedSentence.join(' ')
  }

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
