// https://edabit.com/challenge/D8DDFMFK8RaWWmcGY


function circle_or_square(rad, area){
    return 2*Math.PI*rad>Math.sqrt(area)*4
}


console.log((circle_or_square(16, 625), true));
