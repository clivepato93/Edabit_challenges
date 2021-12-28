// https://edabit.com/challenge/n7qZMpuLsAMGBGNLA

function minutesToSeconds(time) {
	const [minutes,seconds] = time.split(':').map(item=> +item)
    return seconds<60?minutes*60+seconds:false;

}


console.log(minutesToSeconds("01:00"), 60)
console.log(minutesToSeconds("13:56"), 836)
console.log(minutesToSeconds("10:60"), false, "60 is invalid")
console.log(minutesToSeconds("132:21"), 7941)
console.log(minutesToSeconds("132:271"), false)
console.log(minutesToSeconds("01:30"), 90)
console.log(minutesToSeconds("10:00"), 600)
