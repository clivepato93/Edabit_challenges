// https://edabit.com/challenge/BeTYTkLerHFtrjH5u

function millionsRounding(arr) {
	return arr.map(row=> row[1]>=500000?[row[0],Math.round(row[1]/1000000)*1000000]:[row[0],0])
}


const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]
	
	const cities2 = [
	['Sao Paulo', 21846507]
	]
	
	const cities3 = [
	['London', 9304016],
	['Naples', 	2186853],
	['Nice', 	942208],
	['Abu Dhabi', 1482816],
	['Riga', 	630692],
	['Vatican City', 572]
	]
	
console.log(millionsRounding(cities1), [
	['Tokyo', 37000000],
	['Delhi', 29000000],
	['Shanghai', 26000000]
	])
	