//edabit.com/challenge/uE7dCRk2Lb5jsHN7W

function evenOddString(txt) {
    const even=[]
    const odds=[]
    for (let i = 0; i < txt.length; i++) {
        if(i%2===0){
            even.push(txt[i])
        } else {
            odds.push(txt[i])
        }
        
    }

    return even.join('')+' '+odds.join('')
}

console.log(evenOddString("mubashir"), "mbsi uahr")
