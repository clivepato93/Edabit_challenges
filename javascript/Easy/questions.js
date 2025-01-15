// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript

questions = [...questions].map(obj=>{
    const newObj = {...obj}
    newObj.usersAnswer = null;
    return newObj
  })
   