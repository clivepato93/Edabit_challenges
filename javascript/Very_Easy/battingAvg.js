// https://edabit.com/challenge/MEZtqvEeMbGg2YKtt

function battingAvg(arr) {
	const a = arr.reduce((t,c)=> t+c[0],0)
    const b = arr.reduce((t,c)=> t+c[1],0)
    return (a/b).toFixed(3).slice(1,)
}

console.log(battingAvg([
    [0, 0],
    [1, 3],
    [2, 2],
    [0, 4],
    [1, 5],
  ]), '.286')