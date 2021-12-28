


function checkCashRegister(price, cash, cid) {
    const receipt ={
        status:'OPEN',
        change:[],
    }

    // How much change is required 
    let change = cash-price;

    // function to help with javascripts maths precision 
    const precise = num => +num.toFixed(2)

    // Total amount of money in the cash register
    let funds  = (cid.reduce((t,c)=> t+c[1],0))

    /* first check to see if the change needed is greater then
    the money in the register
    */
    if(change>funds){
        receipt.status = "INSUFFICIENT_FUNDS";
        return receipt
    }

    // REFACTORING THE Reducer function 
    // replacing the switch case by object 
    const reducer = function (word,value) {
        const moneyValues = {
            "ONE HUNDRED":100,
            "TWENTY":20,
            "TEN":10,
            "FIVE":5,
            "ONE":1,
            "QUARTER":0.25,
            "DIME":0.1,
            "NICKEL":0.05,
            "PENNY":0.01
        } 

        if(moneyValues[word] && change>=value){
            change-= value;
            funds-= value;
            funds = precise(funds);
            change = precise(change);
            return [word,value]
            receipt.change.push([word,value])
        } else if(moneyValues[word]>change){
            return '';
        }
        else {
            const sub = +(Math.trunc(change/moneyValues[word])*moneyValues[word]).toFixed(2)
            change -= sub
            funds -= sub
            funds = precise(funds)
            change= precise(change)
            return [word,sub]
            // receipt.change.push([word,sub])

        }
    }

    for (let i = cid.length-1; i > -1; i--) {
        const val= reducer(...cid[i])
        if(val==''){
            continue;
        }
        else receipt.change.push([...val])

    }

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

const test =  checkCashRegister(19.5, 20, 
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

const test2 = checkCashRegister(3.26, 100,
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// const test3 = checkCashRegister(19.5, 20, 
//     [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
//     ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
//     ["TWENTY", 0], ["ONE HUNDRED", 0]])

// const test4 = checkCashRegister(19.5, 20, 
//     [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
//     ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0],
//     ["TWENTY", 0], ["ONE HUNDRED", 0]])

// const test5 =checkCashRegister(19.5, 20, 
//     [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
//     ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
//      ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(test)
// console.log(test2)
// console.log(test3)
// console.log(test4)
// console.log(test5)
