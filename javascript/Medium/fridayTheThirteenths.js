// https://www.codewars.com/kata/540954232a3259755d000039/train/javascript

function fridayTheThirteenths(start, end) {
    let years = []
    let unluckyMonths = []
    if(!end) years.push(start)

    if(end){
        const numberOfYears = end-start;
        const howManyYears = Array.from({length:numberOfYears+1},(_,i)=> start+i)
        years.push(...howManyYears)
    }


    for (let i = 0; i < years.length; i++) {
        const months = Array.from({length:12},(_,c)=> {
                const d = new Date(years[i],c,13)
        
        const x = d.getDay();
        if(x==5) return `${c+1}/13/${years[i]}`
    }).filter(el => el)
    console.log(months)
    unluckyMonths.push(...months)  
    }

    return unluckyMonths.join(' ')
}


console.log(fridayTheThirteenths(1999, 2000), "8/13/1999 10/13/2000");
// console.log(fridayTheThirteenths(2000), "10/13/2000");