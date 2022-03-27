

function getRealFloor(n) {
    const numberLength = `${n}`.length
    return n<0||n==13||n==0?n:n>13?n-2:n-1;
}