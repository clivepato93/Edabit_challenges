// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript

function tripleX(str) {
  const pos = str.indexOf("x");
  return pos < 0 ? false : str.slice(pos + 1, pos + 3) == "xx";
}
