function recurrence(base, formula, term) {
  // TODO: Program me
  // recursion
  return term == 1
    ? base
    : recurrence((base = formula(base)), formula, term - 1);
}

console.log(
  recurrence(1, (n) => n + 3, 1),
  1
);
console.log(
  recurrence(1, (n) => n + 3, 3),
  7
);
/*
    console.log(
  recurrence(1, (n) => n + 3, 7),
  19
);
console.log(
  recurrence(1, (n) => n + 3, 10),
  28
);
console.log(
  recurrence(1, (n) => n + 3, 2),
  4
);
console.log(
  recurrence(1, (n) => n + 3, 5),
  13
);
console.log(
  recurrence(1, (n) => n + 3, 9),
  25
);
console.log(
  recurrence(1, (n) => n + 3, 4),
  10
);
console.log(
  recurrence(1, (n) => n + 3, 6),
  16
);
console.log(
  recurrence(1, (n) => n + 3, 8),
  22
);
*/
