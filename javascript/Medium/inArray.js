// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1,array2){
    //...
    const str = array2.join('')
    return array1.filter(el=> {
        const x  = new RegExp(`${el}`)
        return x.test(str)
    }).sort()
  }

console.log(
    inArray(["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]),
    ["live", "strong"])