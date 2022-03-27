// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
    // your code
    return arr.slice(0,arr.length-1).map((el,i)=> [arr.slice(0,i+1).join(' '),arr.slice(i+1).join(' ')])
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]),
[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), 
[["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), 
[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])