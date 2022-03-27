// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/*
    let n= array1.length-1;
    while(n>-1){
        if(array2.indexOf(array1[n]**2) == -1) {
            console.log(`${array1[n]} not found`)
        }

        else{
            const i= array2.indexOf(array1[n]**2)
            // array1.splice(n-1,n)
            array2.splice(i,i+1)
                }
        console.log(array2)
        n--;
    }
    return ! array2.length
    // return array1.filter((c,i)=> {
    //     if(array2.indexOf(c*c) == -1) {
    //         console.log(`${c} not found`)
    //         return c
            
    //     } else{
    //         array2.splice(i,i+1)
    //     }
    // }).length ==0
*/


function comp(array1, array2){
    //your code here
    if(array1==null || array2==null){
        return false
    }

    array1 = array1.sort((a,b)=> a-b)
    array2 = array2.sort((a,b)=> a-b)

    return array1.every((v,i)=> array2[i]== v*v)
    
  }


//   a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//   a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//   console.log(a2)
//   console.log(comp(a1, a2), true);
//   console.log(comp([ 2, 1, 3 ],[ 18, 1, 2 ]), false)
  console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11 ],[ 121, 14641, 20736, 361, 25921, 361, 20736, 361]))