// https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeByLevels(rootNode) {
  const f = [];
  if (!rootNode) return f;
  const queue = [rootNode];
  while (queue.length > 0) {
    const curr = queue.shift();
    f.push(curr.value);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return f;
}

const treeOne = new Node(
  2,
  new Node(8, new Node(1), new Node(3)),
  new Node(9, new Node(4), new Node(5))
);

console.log(treeByLevels(treeOne), [2, 8, 9, 1, 3, 4, 5]);
