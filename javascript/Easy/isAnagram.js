

// var isAnagram = function(test, original) {
//     const o = [...original.toLowerCase()].sort();
//     const t = [...test.toLowerCase()].sort();
//     return t.every((l,i)=> t[i]==o[i])
// };
// 

function isAnagram(test,original){
    const o = [...original.toLowerCase()].sort();
    const t = [...test.toLowerCase()].sort();

    if(o.length!=t.length) return false

    for (let i = 0; i < o.length; i++) {
        if (o[i]!=t[i]) {
            return false 
        }
        
    }
    return true
}

console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count')