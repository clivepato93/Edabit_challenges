// https://edabit.com/challenge/HbkxB6egEhRewQDqr

function calculateYears(humanYears) {
    humanYears=(humanYears+1)
    const final =[0,0,0]
    for(let i=1;i<humanYears;i++){
        if(i===1){
            final[0]+=1
            final[1]+=15
            final[2]+=15
        }
        else if(i===2){
            final[0]+=1
            final[1]+=9
            final[2]+=9
        }
        else{
            final[0]+=1
            final[1]+=4
            final[2]+=5
        }
    }
    return final
}



console.log(calculateYears(1), [1,15,15])
console.log(calculateYears(2), [2,24,24])

console.log(calculateYears(10), [10,56,64])
