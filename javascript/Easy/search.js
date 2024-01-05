// Binary tree
// https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function search(n, root) {
  // Determines if a value is in a binary tree (NOT bst)
  // Your code here!
  if (!root) return false;
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.value == n) {
      return true;
    }
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return false;
}

function search(n, root) {
  // Determines if a value is in a binary tree (NOT bst)
  // Your code here!
  if (!root) return false;
  if (root.value == n) return true;
  else {
    return search(n, root.left) || search(n, root.right);
  }
}

function search(n, root) {
  // Determines if a value is in a binary tree (NOT bst)
  // Your code here!

  return !root
    ? false
    : root.value == n || search(n, root.left) || search(n, root.right);
}

const root = new Node(666, new Node(555), new Node(444));
console.log(search(444, root), true);
// console.log(search(555, root), true);
// console.log(search(666, root), true);
// console.log(search(777, root), false);
