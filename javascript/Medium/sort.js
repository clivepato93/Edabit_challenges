


function sort(initialArray, sortingArray) {
    // console.log(initialArray, sortingArray)

    const newN = []
    initialArray.forEach((letter,i) => {
        newN.push([letter,sortingArray[i]])
    });
    // console.log(newN)
    return newN.sort((a,b)=>a[1]-b[1]).map(el=> el[0])
  }


  function sort(initialArray, sortingArray) {
    // console.log(initialArray, sortingArray)
    // console.log(newN)
    return initialArray.map((el,i)=> [el,i]).map(row=> initialArray[sortingArray.indexOf(row[1])])
  }


  console.log(sort([ 'x', 'y', 'z' ],[ 1, 2, 0 ]),['z','x','y'])
  console.log(sort([ 'h', 'a', 'c', 'g', 'b', 'f', 'e', 'd' ],[ 1, 2, 3, 0, 5, 4, 7, 6 ])
  ,[ 'g', 'h', 'a', 'c', 'f', 'b', 'd', 'e' ])