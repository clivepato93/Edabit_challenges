// https://edabit.com/challenge/J3aRjEJoJoJ5yGBgR

/*
function weightAllowed(car, p, maxWeight) {
    const a = p.reduce( (total,current)=> total+current)*0.453592
    return a+car*0.453592<maxWeight
}
*/

function weightAllowed(car, p, maxWeight) {
    const a = p.reduce( (total,current)=> total+current)
    return (a+car)*0.453592<maxWeight
}

console.log((weightAllowed(3000, [150, 201, 75, 88, 195], 1700), true));
console.log(weightAllowed(3200, [220, 101, 115, 228, 15], 1700), false);
console.log(weightAllowed(2900, [225, 171, 300, 274, 191], 1850), true);