// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
    const letterSorter = (letters) => [...letters].sort().join();
    word = letterSorter(word)
    return words.filter(el=> letterSorter(el)== word)
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);  
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
