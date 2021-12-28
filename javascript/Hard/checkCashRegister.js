// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register


function checkCashRegister(price, cash, cid) {
    const receipt ={
        status:'OPEN',
        change:[],
    }
    let change = cash-price;
    console.log(change)
    const precise = num => +num.toFixed(2)
    let funds  = (cid.reduce((t,c)=> t+c[1],0))

    
    // console.log(funds)
    if(change>funds){
        receipt.status = "INSUFFICIENT_FUNDS";
        return receipt
    }
    


    const reducer = function(word,value){
        // console.log(value);
        switch (word) {
            case "ONE HUNDRED":
                if(change>=value){
                    change -= value
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])
                    break;

                } else if(100>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/100)*100).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "TWENTY":
                if(change>=value){
                    change -= value
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])
                    // const sub = +(Math.trunc(change/20)*20).toFixed(2)
                    // change = +change.toFixed(2)

                } else if(20>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/20)*20).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "TEN":
                if(change>=value){
                    change -= value
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(10>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/10)*10).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
                
            break;
            case "FIVE":
                if(change>=value){
                    change -= value                    
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(5>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/5)*5).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "ONE":
                if(change>=value){
                    change -= value                    
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(1>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/1)*1).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "QUARTER":
                if(change>=value){
                    change -= value
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(0.25>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/0.25)*0.25).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "DIME":
                if(change>=value){
                    change -= value                    
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(0.1>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/0.1)*0.1).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "NICKEL":
                if(change>=value){
                    change -= value
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(0.1>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/0.1)*0.1).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;
            case "PENNY":
                if(change>=value){
                    change -= value
                    funds -= value
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,value])

                } else if(0.01>change){
                    break;
                } else{
                    const sub = +(Math.trunc(change/0.01)*0.01).toFixed(2)
                    change -= sub
                    funds -= sub
                    funds = precise(funds)
                    change= precise(change)
                    receipt.change.push([word,sub])
                }
            break;            
        }
    }

    for (let i = cid.length-1; i > -1; i--) {
        reducer(...cid[i])
    }
    // console.log(funds)
    console.log(change)

    if(funds==0){
        receipt.status = "CLOSED";
        receipt.change = [...cid]
        return receipt
    } else if(change!=0){
        receipt.status = "INSUFFICIENT_FUNDS";
        receipt.change = []
        return receipt
    }

    receipt.change.sort((a,b)=> b[1]-a[1])

    return receipt;
}
  
// const test =  checkCashRegister(19.5, 20, 
//     [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
//     ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
//     ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// const test2 = checkCashRegister(3.26, 100,
//     [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
//     ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
//     ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// const test3 = checkCashRegister(19.5, 20, 
//     [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
//     ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
//     ["TWENTY", 0], ["ONE HUNDRED", 0]])

const test4 = checkCashRegister(19.5, 20, 
    [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
    ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0],
    ["TWENTY", 0], ["ONE HUNDRED", 0]])

// const test5 =checkCashRegister(19.5, 20, 
//     [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
//     ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
//      ["TWENTY", 0], ["ONE HUNDRED", 0]])

// console.log(test)
// console.log(test2)
// console.log(test3)
console.log(test4)
// console.log(test5)



