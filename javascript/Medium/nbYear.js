
function nbYear(p0, percent, aug, p) {
    // your code
    percent/=100;
    // console.log(percent);
    let years = 0;
    while(p0<p){
        // console.log(p0,years)
        p0+= Math.floor(p0*percent)+aug
        years++;
    }
    return years;
}

// console.log(nbYear(1500, 5, 100, 5000), 15);
// console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
// console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
console.log(nbYear(1500000, 0, 10000, 2000000));
// console.log(nbYear(150000, 0.25, 1, 2000000),50)
/*
1500 5 100 5000
1500000 2.5 10000 2000000
1500000 0.25 1000 2000000
1500000 0.25 -1000 2000000
1500000 0.25 1 2000000
1500000 0 10000 2000000
*/