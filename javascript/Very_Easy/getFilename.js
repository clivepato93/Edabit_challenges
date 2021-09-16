// https://edabit.com/challenge/mN98zKeSSLnXwKz8C

function getFilename(path) {
	const check = path.split('/')
    return check[check.length-1]
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"), "edabit.txt")
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"), "Beethoven_5.mp3")
console.log(getFilename("ffprobe.exe"), "ffprobe.exe")
console.log(getFilename("Music/Drafts/unfinished2.midi"), "unfinished2.midi")