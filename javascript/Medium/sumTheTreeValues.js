class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sumTheTreeValues(root, t = []) {
  // your code here
  //   debugger;
  if (root == null) return;
  if (root.value) t.push(root.value);

  if (root.left) sumTheTreeValues(root.left, t);
  if (root.right) sumTheTreeValues(root.right, t);

  return t.reduce((t, c) => t + c);
}

var simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
};
console.log(sumTheTreeValues(simpleNode), 13);

// var unbalancedNode = {
//   value: 11,
//   left: { value: 0, left: null, right: null },
//   right: { value: 0, left: null, right: { value: 1, left: null, right: null } },
// };
// console.log(sumTheTreeValues(unbalancedNode), 12);
