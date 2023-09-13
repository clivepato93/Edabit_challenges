// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
  // is this job a valid match for the candidate?

  // throw Error
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error("not valid");
  }
  const deduct = candidate.minSalary * 0.1;
  return candidate.minSalary - deduct <= job.maxSalary;
}

let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

console.log(match(candidate1, job1), true);
console.log(match(candidate1, job2), false);
