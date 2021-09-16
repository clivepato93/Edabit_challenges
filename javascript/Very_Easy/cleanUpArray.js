// https://edabit.com/challenge/EEWcSX7Rz5cWzes5d

const cleanUpArray = (arr) => {
    return [arr.map(x=>+x).filter(x=> +Number(x)%2===0)
            ,arr.map(x=>+x).filter(x=> +Number(x)%2===1)]}