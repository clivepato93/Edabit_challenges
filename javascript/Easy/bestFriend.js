// https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/javascript

function bestFriend(txt, a, b) {
    let bool = true
    for (let i = 0; i < txt.length; i++) {
        if(!bool) break
        if (txt[i] != a) {
            continue
        }
        else {
        bool = a+b ==txt[i]+txt[i+1]   
        }
    }
  return bool;
}

console.log(bestFriend('','z', 'h'), true, `bestFriend('', 'z', 'h')`)
console.log(bestFriend('h','z', 'h'), true, `bestFriend('h', 'z', 'h')`)
console.log(bestFriend('abhc', 'z', 'h'), true, `bestFriend('abhc', 'z', 'h')`)
 
console.log(bestFriend('zh','z', 'h'), true, `bestFriend('zh', 'z', 'h')`)
console.log(bestFriend('zoo wee mama','m', 'a'), true, `bestFriend('zoo wee mama', 'm', 'a')`)
console.log(bestFriend('i found an ounce with my hound','o', 'u'), true, `bestFriend('i found an ounce with my hound', 'o', 'u')`)
console.log(bestFriend('he headed to the store','h', 'e'), true, `bestFriend('he headed to the store', 'h', 'e')`)
console.log(bestFriend('those were their thorns they said','t', 'h'), true, `bestFriend('those were their thorns they said', 't', 'h')`)

 
console.log(bestFriend('z', 'z', 'h'), false, `bestFriend('z', 'z', 'h')`)
console.log(bestFriend('aza', 'z', 'h'), false, `bestFriend('aza', 'z', 'h')`)