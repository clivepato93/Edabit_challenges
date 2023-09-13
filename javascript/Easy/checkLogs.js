// https://www.codewars.com/kata/64cac86333ab6a14f70c6fb6/train/javascript

function checkLogs(log) {
  // return the mininum number of days
  let days = 0;
  for (let i = 0; i < log.length; i++) {
    if (i == 0) days++;
    if (i > 0) {
      const previous = log[i - 1];
      const current = log[i];
      if (previous === current) days++;
      if (
        previous.slice(0, 1) === "2" &&
        (current.slice(0, 1) === "1" || current.slice(0, 1) === "0")
      ) {
        console.log(previous, current, "first if ", "round ", i + 1);
        days++;
      } else if (previous.slice(0, 1) === "1" && current.slice(0, 1) === "0") {
        console.log(previous, current, "second if ", "round ", i + 1);
        days++;
      } else if (previous > current) {
        console.log(previous, current, "third if ", "round ", i + 1);
        days++;
      }
    }
  }
  return days;
}

function checkLogs(log) {
  // return the mininum number of days
  let days = 0;
  for (let i = 0; i < log.length; i++) {
    if (i == 0) days++;
    if (i > 0) {
      const previous = log[i - 1];
      const current = log[i];
      if (previous === current) days++;
      else if (previous > current) {
        // console.log(previous, current, "third if ", "round ", i + 1);
        days++;
      }
    }
  }
  return days;
}

// console.log(checkLogs(["12:12:12"]), 1);
// console.log(
//   checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]),
//   1
// );
// console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]), 2);
// console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"]), 3);
console.log(
  checkLogs([
    "03:04:22",
    "00:12:13",
    "14:53:32",
    "05:56:47",
    "00:28:35",
    "06:36:11",
    "16:11:27",
    "09:21:18",
    "18:41:14",
    "01:34:07",
    "11:33:49",
    "02:17:48",
    "05:27:38",
    "06:52:41",
    "10:17:23",
    "15:06:59",
    "20:29:55",
    "07:20:23",
    "00:10:16",
    "04:05:39",
    "21:34:44",
    "01:39:36",
    "01:38:28",
    "21:43:01",
    "03:07:41",
    "15:18:01",
    "07:02:12",
    "06:53:07",
    "15:46:00",
    "07:06:30",
    "04:46:17",
    "18:15:54",
    "04:51:28",
    "13:34:06",
    "14:30:37",
    "22:40:06",
    "22:01:40",
    "08:34:47",
    "16:30:53",
    "17:14:14",
    "05:19:55",
    "17:04:35",
    "10:38:09",
    "12:36:44",
    "22:36:31",
    "22:38:16",
    "02:55:13",
    "17:56:54",
    "19:23:39",
  ]),
  22
);
