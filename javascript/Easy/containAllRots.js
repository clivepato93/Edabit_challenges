// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
    // your code
    let x = 0;
    // const obj = {

    // }

    // for (const letter of strng) {
    //     if(!obj[letter]){
    //         obj[letter] = 1;
    //     }
    //     else{
    //         obj[letter]++;
    //     }
    // }
    arr.forEach(word => {
        let check = 0;
        const letters = [...word];
        for (const letter of letters) {
            if(strng.includes(letter)){
                check++;
            }
        }
        if(check==strng.length){
            x++;
        }
    });

    return x>=strng.length
}

console.log(containAllRots('12341234',
 [ 'DIeF', 'IeFD', '12341234', '41234123', '34123412', '23412341' ]),true)
console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj",
 "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)