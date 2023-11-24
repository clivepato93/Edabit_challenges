// https://www.codewars.com/kata/582c5382f000e535100001a7/train/javascript

var push = (head, data) => new Node(data, head);

function parse(string) {
  // Write your code here
  const arr = string
    .split(" -> ")
    .map((element) => (element != "null" ? +element : null))
    .slice(0, -1);

  return arr.length ? arr.reduceRight(push, null) : null;
}
