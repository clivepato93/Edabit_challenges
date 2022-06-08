// https://edabit.com/challenge/Tu2PuZf8yXQAE6kFD

function abcmath(a, b, c) {
	while (b) {
        console.log(a);
        a+= a;
        b--;
    } return a%c==0
}


// console.log(abcmath(1, 2, 3), false)
// // console.log(abcmath(69, 15, 9), false)
// console.log(abcmath(9, 2, 52), false)
// console.log(abcmath(5, 2, 3), false)
// console.log(abcmath(5, 2, 1), true)
// console.log(abcmath(261, 2, 1), true)
// console.log(abcmath(22, 2, 22), true)
// console.log(abcmath(69, 12, 3), true)