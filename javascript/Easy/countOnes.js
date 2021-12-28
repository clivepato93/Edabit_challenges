// https://edabit.com/challenge/ve7mQnJsjtFep97fm

function countOnes(m) {
    let total = 0
	for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j]==1) {
                total++;
            }
        }
    } return total
}   