// codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript
// Regex
function htmlspecialchars(formData) {
  // Insert your code here
  const arr = [];
  for (let i = 0; i < formData.length; i++) {
    const letter = formData[i];
    if (letter === "<") {
      console.log(letter);
      arr.push("&lt;");
    } else if (letter === ">") {
      arr.push("&gt;");
    } else if (letter === '"') {
      arr.push("&quot;");
    } else if (letter === "&") {
      arr.push("&amp;");
    } else {
      arr.push(letter);
    }
  }
  return arr.join("");
}

console.log(
  htmlspecialchars("<h2>Hello World</h2>"),
  "&lt;h2&gt;Hello World&lt;/h2&gt;"
);

// console.log(
//   htmlspecialchars("Hello, how would you & I fare?"),
//   "Hello, how would you &amp; I fare?"
// );

// console.log(
//   htmlspecialchars('How was "The Matrix"?  Did you like it?'),
//   "How was &quot;The Matrix&quot;?  Did you like it?"
// );

// console.log(
//   htmlspecialchars("<script>alert('Website Hacked!');</script>"),
//   "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
// );
