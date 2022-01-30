

function calculateYears(principal, interest, tax, desired, years=0) {
    // your code
    return principal< desired? calculateYears((principal+=(principal*interest)-((principal*interest)*tax)),interest,tax,desired,years+1):years;
}

// function calculateYears(principal, interest, tax, desired, years=0) {
//     // your code
//     while (principal<desired) {

//         annualIncrease = (principal*interest)-(principal*interest)*tax;
//         // console.log(annualIncrease)
//         principal+= annualIncrease;
//         years++;
//     }
//     return years
// }

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
// console.log(calculateYears(1000,0.01625,0.18,1200), 14)
// console.log(calculateYears(1000,0.05,0.18,1000), 0)