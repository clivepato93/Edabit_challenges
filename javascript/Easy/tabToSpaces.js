// https://www.codewars.com/kata/5779474882d7d0a10f000005/train/javascript

function tabToSpaces(text) {
  const rows = text.split(/\n/);
  for (let index = 0; index < rows.length; index++) {
    let word = "";
    let count = 0;

    const row = rows[index];
    for (let j = 0; j < row.length; j++) {
      if (row[j] == "\t") {
        word += " ".repeat(4 - (count % 4));
        count = 0;
      } else {
        word += row[j];
        count++;
      }
    }
    rows[index] = word;
  }
  return rows.join("\n");
}

// console.log(tabToSpaces("ab\t12"), "ab  12");
// console.log(tabToSpaces("a\t123\n\t123"), "a   123\n    123");
console.log(
  tabToSpaces(
    "a\tbcdef\t1\t23456\nab\tcdef\t123 456\n\tabcdef\t12\t3456\na\tbcdef\t\t12346"
  ),
  "a   bcdef   1   23456\nab  cdef    123 456\n    abcdef  12  3456\na   bcdef       12346"
);
// console.log(tabToSpaces("a\tbcdef\t1\t23456"), "a   bcdef   1   23456");
// console.log(
//   tabToSpaces(
//     "a\tbcdef\t1\t23456\nab\tcdef\t123 456\n\tabcdef\t12\t3456\na\tbcdef\t\t12346"
//   ),
//   "a   bcdef   1   23456\nab  cdef    123 456\n    abcdef  12  3456\na   bcdef       12346"
// );
// console.log(tabToSpaces("ab  cdef 123 456") == "a   bcdef   1   23456");
// console.log(
//   tabToSpaces(
//     '#include <iostream>\n\nint main()\n{\n\tstd::cout << "Hello World!";\n}'
//   ),
//     '#include <iostream>\n\nint main()\n{\n    std::cout << "Hello World!";\n}'
// );
