// https://edabit.com/challenge/fiLc5x3x2bHzHvgK4



function mauriceWins(mSnails, sSnails) {
	const [ms,mm,mf] = mSnails
    const [ss,sm,sf] = sSnails

    let wins  = 0
    ms>sf?wins+=1:wins;
    mm>ss?wins+=1:wins;
    mf>sm?wins+=1:wins;
    
    return wins>=2
}


console.log(mauriceWins([3, 5, 10], [4, 7, 11]), true);
console.log(mauriceWins([6, 8, 9], [7, 12, 14]), false);
console.log(mauriceWins([1, 8, 20], [2, 9, 100]), true);
console.log(mauriceWins([1, 2, 3], [2, 3, 4]), false);
console.log(mauriceWins([2, 4, 10], [3, 9, 11]), true);
console.log(mauriceWins([3, 8, 13], [5, 11, 15]), true);