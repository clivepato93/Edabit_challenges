

function dirReduc(arr){
    // ...
    let t = true;
    let i = 0;
    let length = arr.length-1;
    const d = {'NORTH':'SOUTH','SOUTH':'NORTH','EAST':'WEST','WEST':'EAST'}
    while(t){
        console.log(arr,i,length)
        if(i>=length){
            t=false
        }
        if(d[arr[i]]==arr[i+1]){
            arr.splice(i,2)
            i=0;
            length--;
        } else if (i && d[arr[i]]==arr[i-1]){
            arr.splice(i-1,2)
            i=0;
            length--;
        }
        i++;

        
    }
    return arr
  }


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])