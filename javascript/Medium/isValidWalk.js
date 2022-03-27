// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    //insert brilliant code here
    if(walk.length!=10) return false
    const north = walk.reduce((t,c)=> c=='n'?t+=1:t,0)
    const south = walk.reduce((t,c)=> c=='s'?t+=1:t,0)
    const east = walk.reduce((t,c)=> c=='e'?t+=1:t,0)
    const west = walk.reduce((t,c)=> c=='w'?t+=1:t,0)
    console.log(north,south,west,east)
    return north===south&&west===east
  }


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');