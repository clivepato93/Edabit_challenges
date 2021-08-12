// #  https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3

function checkEquality(a, b) {
    return a===b
}


console.log(checkEquality(1, true), false, "Example #1")
console.log(checkEquality(0, "0"), false, "Example #2")
console.log(checkEquality(1, 1), true, "Example #3")
console.log(checkEquality(0, ""), false)
console.log(checkEquality(1, "1"), false)
console.log(checkEquality(0, false), false)
console.log(checkEquality(NaN, NaN), false)
console.log(checkEquality(null, undefined), false)
console.log(checkEquality(undefined, undefined), true)
console.log(checkEquality(false, null), false)
