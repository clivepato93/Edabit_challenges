// https://edabit.com/challenge/3xqP79TrHiwnwGizj

function returnOnlyInteger(arr) {
    return arr.filter(item=> typeof item ==='number' && Number.isInteger(item))	
    }