// https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript

function sortList(sortBy, list) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}
