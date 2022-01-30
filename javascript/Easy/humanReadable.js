// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    const hours = `${Math.round(seconds/3600)?Math.floor(seconds/3600):0}`.padStart(2,0);
    seconds -= (hours)*3600
    const minutes = `${Math.round(seconds/60)?Math.floor(seconds/60):0}`.padStart(2,0);
    seconds -= (minutes)*60
    const s = `${seconds}`.padStart(2,0)
    return `${hours}:${minutes}:${s}`;
  }

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59), '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90), '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');