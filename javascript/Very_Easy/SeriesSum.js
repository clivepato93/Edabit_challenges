

function SeriesSum(n)
{
    let t = 1;
    let x = 4
    for (let i = 1; i < n; i++) {
        t+= 1/x;
        x+=3;
    }
    return n?t.toFixed(2)+1:n.toFixed(2)
}

console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")