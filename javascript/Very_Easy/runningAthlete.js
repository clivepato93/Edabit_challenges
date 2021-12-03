// https://edabit.com/challenge/pMrpGchpAwpM5BySZ


function runningAthlete(act, txt) {
    const translate = {
        'run_':'_',
        'jump|':'|',
        'run|':'/',
        'jump_':'x',
    }

    let finala = [];
    for (let index = 0; index < act.length; index++) {
        const text = translate[act[index]+txt[index]];
        finala.push(text);
        // console.log(translate[act[index]+txt[index]]);
        // console.log(finala)
        // final+=text;
    } 
    return finala.join('')
}

// console.log((runningAthlete(["run","jump","run","jump","run"],"_|_|_"),"_|_|_"));
// console.log((runningAthlete(["run","jump","run","run","run"],"_|_|_"),"_|_/_"));
// console.log((runningAthlete(["run","run","run","run","run"],"_|_|_"),"_/_/_"));
console.log((runningAthlete(["jump","jump","jump","jump","jump"],"_|_|_"),"x|x|x"));
// console.log((runningAthlete(["jump","run","jump","run","jump"],"_|_|_"),"x/x/x"));
// console.log((runningAthlete(["run","run","run","run","run","run","run","run","run","run"],"||||||||||"),"//////////"));
// console.log((runningAthlete(["jump","jump","jump","jump","jump","jump","jump","jump","jump","jump"],"__________"),"xxxxxxxxxx"));
//Mubashir