

function cubeSum(n, m){
    //TODO: sum of cubes
    let total = 0
    let [min,max] = [Math.min(n,m),Math.max(n,m)]
    for (min+=1; min<=max; min++) {
        total += min**3
        
    }
    return total
}

console.log(cubeSum(5, 0), 225, "cubeSum(5,0)");
console.log(cubeSum(2, 3), 27, "cubeSum(2,3)")