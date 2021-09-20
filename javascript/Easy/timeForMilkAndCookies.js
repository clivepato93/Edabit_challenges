// https://edabit.com/challenge/hPWnaSckJke5FXNEH

function timeForMilkAndCookies(date) {
    return date.getMonth()===11 && date.getDate()===24?true: false
}


console.log(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
