// https://www.codewars.com/kata/57a23e3753ba332b8e0008da/train/javascript
function helpZoom(str) {
  //code here..
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - (1 + i)]) return "No";
  }
  return "Yes";
}
