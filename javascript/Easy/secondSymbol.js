function secondSymbol(s, symbol) {
  // your code
  const arr = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) arr.push(i);
  }

  return arr[2] || arr[0];
}

console.log(
  secondSymbol("Hello world!!!", "l"),
  3,
  'Find the index of the second symbol "l" in the string'
);
console.log(
  secondSymbol("Hello world!!!", "o"),
  7,
  'Find the index of the second symbol "o" in the string'
);
console.log(
  secondSymbol("Hello world!!!", "A"),
  -1,
  'The symbol "A" is not in the string'
);
console.log(secondSymbol("", "q"), -1, 'The symbol "q" is not in the string');
console.log(
  secondSymbol("Hello", "!"),
  -1,
  'The symbol "!" is not in the string'
);
