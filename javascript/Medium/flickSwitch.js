// https://edabit.com/challenge/ny2JAEmW5j6NgmpC8

function flickSwitch(arr) {
	let x= true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==='flick'){
        x=!x;
        } arr[i]=x
    } return arr
}


console.log(flickSwitch(['edabit', 'flick', 'eda', 'bit']), [true, false, false, false])
console.log(flickSwitch(['flick', 11037, 3.14, 53]), [false, false, false, false])
console.log(flickSwitch([false, false, 'flick', 'sheep', 'flick']), [true, true, false, false, true])
console.log(flickSwitch([flickSwitch]), [true])