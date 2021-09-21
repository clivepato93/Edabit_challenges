// https://edabit.com/challenge/3hdXjfJozQySRC3gE

function getDays(date1, date2) {
    return(date2-date1)/(1000*60*60*24)
}


console.log((getDays(new Date('June 14, 2019'), new Date('June 20, 2019')), 6));
