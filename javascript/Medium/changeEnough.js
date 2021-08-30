// https://edabit.com/challenge/erFxBbqzZPSegMwnc

function changeEnough(change, amountDue) {
    let total = 0
	const coinWorth=[0.25,0.10,0.05,0.01]
    for(let i=0;i<coinWorth.length;i++){
        total+=change[i]*coinWorth[i]
    }
    return total>=amountDue
}

console.log(changeEnough([0, 0, 20, 5], 0.75), true);
