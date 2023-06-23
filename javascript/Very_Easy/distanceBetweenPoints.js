// https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
// https://www.expii.com/t/distance-formula-4560#:~:text=The%20length%20of%20this%20line%20is%20also%20the%20distance%20between%20the%20points.&text=Notice%20that%20the%20x%2Dcoordinate,%2C%20c2%3Da2%2Bb2.
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.abs(b.x - a.x) ** 2 + Math.abs(b.y - a.y) ** 2); // your code here
}
