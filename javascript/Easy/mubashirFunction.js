



function mubashirFunction(a, b) {
	const first = [...String(a)].reduce((t,c)=> t+ +c,0)
    const second = [...String(b)].reduce((t,c)=> t+ +c,0)
    // .reduce((t,c)=> t+c,0)
    return first*second
}

//0 * 1 = 0
console.log(mubashirFunction(0,1), 0)

//Obviously, 1 * 2 = 2
console.log(mubashirFunction(1,2), 2)

//That was easy, 5 * 6 = 30
console.log(mubashirFunction(5,6), 30)

//Wait.. What? 10 * 10 = 1 ?

console.log(mubashirFunction(12,34), 21)
