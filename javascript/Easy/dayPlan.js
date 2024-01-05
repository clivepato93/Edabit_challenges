// https://www.codewars.com/kata/581de9a5b7bad5d369000150/train/javascript

function dayPlan(hours, tasks, duration) {
  // Write your code in here!
  const hoursAvailable = hours * 60;
  const taskTime = tasks * duration;
  if (hoursAvailable < taskTime) return "You're not sleeping tonight!";
  //   return schedule;
  const breakTime = Math.round((hoursAvailable - taskTime) / (tasks - 1));
  return Array.from({ length: tasks * 2 - 1 }, (_, i) =>
    i % 2 == 0 ? duration : breakTime
  );
}

console.log(dayPlan(8, 5, 30), [30, 83, 30, 83, 30, 83, 30, 83, 30]);
console.log(dayPlan(2, 2, 60), [60, 0, 60]);
console.log(dayPlan(3, 5, 60), "You're not sleeping tonight!");
