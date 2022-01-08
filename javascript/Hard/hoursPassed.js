// https://edabit.com/challenge/CFszCxtcmqAsgZdw8

function hoursPassed(t1, t2) {
	const obj={'AM':0,'PM':12}
    const time1=t1!=="12:00 AM"?t1.split(':00 '):[0,'AM']
    const time2=t2!=="12:00 AM"?t2.split(':00 '):[0,'AM']
    return (+time2[0]+obj[time2[1]])-(+time1[0]+obj[time1[1]])==0?'no time passed':`${(+time2[0]+obj[time2[1]])-(+time1[0]+obj[time1[1]])} hours`
}

let [strVector, resVector] = [
    [["3:00 AM", "9:00 AM"], ["2:00 PM", "4:00 PM"], ["1:00 AM", "3:00 PM"], ["2:00 AM", "3:00 PM"],
     ["8:00 AM", "8:00 PM"], ["12:00 AM", "10:00 PM"], ["1:00 AM", "1:00 AM"], ["12:00 PM", "12:00 PM"]],
    ["6 hours", "2 hours", "14 hours", "13 hours", "12 hours", "22 hours", "no time passed", "no time passed"]
  ]
  for (let i in strVector) console.log(hoursPassed(...strVector[i]), resVector[i])