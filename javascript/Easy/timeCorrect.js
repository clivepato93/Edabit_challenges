// https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript

function timeCorrect(t) {
  if (/^\d{2}:\d{2}:\d{2}$/.test(t) == false) return null;

  let [hour, min, sec] = t.split(":").map(Number);
  //   console.log(min);
  if (sec > 60) {
    sec = sec % 60;
    min++;
  }
  console.log(min);

  if (min > 60) {
    min = min % 60;
    hour++;
  }

  hour = `${hour >= 24 ? hour % 24 : hour}`.padStart(2, 0);
  min = `${min}`.padStart(2, 0);
  sec = `${sec}`.padStart(2, 0);
  return hour + ":" + min + ":" + sec;
}
console.log(timeCorrect("19:99:99"), "20:40:39");
console.log(timeCorrect("001122"), null);
console.log(timeCorrect("00;11;22"), null);
console.log(timeCorrect("0a:1c:22"), null);
