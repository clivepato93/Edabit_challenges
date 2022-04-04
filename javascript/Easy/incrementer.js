// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

function incrementer(nums) { 
    // code goes here
    return nums.map((el,i)=>{
        const d =el+i+1
        return `${d}`.length>1? +`${d}`.slice(1,):d
    })

}

  