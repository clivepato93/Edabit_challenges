// https://edabit.com/challenge/W8R9CPBThreBBXYLS
function multiSum(num, ten=10) {
	if(ten===1){
        return num*1
    } return num*ten+multiSum(num,ten-1)
}

console.log(multiSum(1), 55)