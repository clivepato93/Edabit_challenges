// https://www.codewars.com/kata/59ca888aaeb284bb8f0000aa/train/javascript

function canIPlay(now, start, end) {
  debugger;
  let loop = true;
  while (loop) {
    if (now == end || start == end) loop = !loop;
    //   if (start == end) !loop;
    if (now == start) {
      return true;
    }

    start++;
    if (start == 24) {
      start = 0;
    }
  }
  return false;
}

function canIPlay(now, start, end) {
  debugger;
  for (let i = start; i != end; i = (i + 1) % 24) if (i === now) return true;
  return false;
}

console.log(
  canIPlay(12, 10, 14),
  true,
  "12:00 should match to 10:00-14:00 prime-time"
);
console.log(
  canIPlay(12, 13, 14),
  false,
  "12:00 shouldn't match to 13:00-14:00 prime-time"
);
console.log(
  canIPlay(15, 12, 15),
  false,
  "15:00 shouldn't match to 12:00-15:00 prime-time"
);
console.log(
  canIPlay(23, 22, 1),
  true,
  "23:00 should match to 22:00-01:00 prime-time"
);
