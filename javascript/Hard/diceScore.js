// https://edabit.com/challenge/tM3qXKn2MMCYCpWMD

function diceScore(throws) {
	const set = [...new Set(throws)]
    let total = 0
    set.forEach(digit => {
        const numbers = throws.filter(el=> el==digit).length
        if(digit==1 && numbers<3){
            total+= 100*numbers
        } if(digit==1 && numbers>=3){
            total+= 1000

            total+= 100*(numbers-3)
        } if(digit==6 && numbers>=3){
            total+= 600
        } if(digit==5 && numbers<3){
            total+= 50*(numbers)
        } 
        if(digit==5 && numbers>=3){
            total+= 500
            total+= 50*(numbers-3)
        } if(digit==4 && numbers>=3){
            total+= 400
        } if(digit==3 && numbers>=3){
            total+= 300
        } if(digit==2 && numbers>=3){
            total+= 200
        }
    });
    return total
}


console.log(diceScore([2,3,4,6,2]),0)
console.log(diceScore([1,1,1,3,3]),1000,"Should be 1000");
console.log(diceScore([2,2,2,3,3]),200,"Should be 200");
console.log(diceScore([3,3,3,3,3]),300,"Should be 300");
console.log(diceScore([4,4,4,3,3]),400,"Should be 400");
console.log(diceScore([5,5,5,3,3]),500,"Should be 500");
console.log(diceScore([6,6,6,3,3]),600,"Should be 600");
console.log(diceScore([1,1,1,1,3]),1100,"Should be 1100");
console.log(diceScore([1,1,1,1,5]),1150,"Should be 1150");
console.log(diceScore([2,4,4,5,4]),450,"Should be 450");
console.log(diceScore([3,4,5,3,3]),350,"Should be 350");
console.log(diceScore([1,5,1,3,4]),250,"Should be 250");

//Mubashir