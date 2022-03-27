

function explode(s) {
    return [...s].map(el=> el.repeat(+el)).join('');
  }

  const tests = [["312", "333122"],["102269","12222666666999999999"],["0", ""],["000", ""],["123", "122333"]];

  for(let i = 0; i < tests.length; i++) {
    console.log(explode(tests[i][0]), tests[i][1], 'Input: ' + tests[i][0]);
  }