// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// function towerBuilder(nFloors) {
//     // build here
//     const tower = []
//     for (let i = 1; i <= nFloors; i++) {
//         const star = '*'.repeat(i*2-1) 
//         const space = ' '.repeat(nFloors-i)
//         tower.push(space+star+space)
        
//     }
//     return tower
//   }

//   .padEnd(nFloors*i+1,' ')

function towerBuilder(nFloors) {
    // build here
    return Array.from({length:nFloors},(_,i)=> {
        const star = '*'.repeat(2*(i+1)-1) 
        const space = ' '.repeat(nFloors-(i+1))
        return space+star+space
    })
  }

  console.log(towerBuilder(1), ["*"]);
  console.log(towerBuilder(2), [" * ","***"]);
  console.log(towerBuilder(3), ["  *  "," *** ","*****"]);