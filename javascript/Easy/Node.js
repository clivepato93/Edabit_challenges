//www.codewars.com/kata/55befc42bfe4d13ab1000007/train/javascript

// Node Kata's
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList(head = null) {
  this.head = head;
}

function getNth(node, index) {
  // Your code goes here.
  if (!node) throw new Error("Invalid node at " + index);
  // console.log(node);
  return index === 0 ? node : getNth(node.next, index - 1);
}

//www.codewars.com/kata/55beec7dd347078289000021/train/javascript
function length(head, len = 0) {
  // Your code goes here.
  if (!head) return len;
  return length(head.next, (len = len + 1));
}

function count(head, data, coun = 0) {
  // Your code goes here.
  console.log(head, coun);
  if (!head) return coun;
  if (data === head.data) coun += 1;
  return count(head.next, data, coun);
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);

a.next = b;
b.next = c;
const list = new LinkedList(a);
// list.head = a;
console.log(list);
// console.log(length(a), 3);
// console.log(count(a, 1), 1);

// https://www.codewars.com/kata/581c6b075cfa83852700021f/train/javascript
function indexOf(head, value, index = 0) {
  if (!head) {
    console.log("test");
    return -1;
  }
  if (value === head.data) return index;
  return indexOf(head.next, value, (index += 1));
}

console.log(indexOf(list.head, 2), 1);
