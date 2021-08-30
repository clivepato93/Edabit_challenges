// https://edabit.com/challenge/ms3q5GYSpFpwxeFWX


function volumeOfBox(sizes) {
    let n=1
	arr = Object.values(sizes)
    for (let index = 0; index < arr.length; index++) {
        n *= arr[index];
        
    }
    return n
}

console.log(volumeOfBox({width: 11,length: 1, height: 2}), 22)
console.log(volumeOfBox({width: 1, length: 5,  height: 3}), 15)
console.log(volumeOfBox({width: 2, length: 1,  height: 1}), 2)
console.log(volumeOfBox({width: 2, length: 6,  height: 5}), 60)
console.log(volumeOfBox({width: 2, length: 5,  height: 3}), 30)
console.log(volumeOfBox({width: 2, length: 5,  height: 1}), 10)