// https://www.codewars.com/kata/581c867a33b9fe732e000076/train/javascript

function lastIndexOf(head, value) {
  if (!head) return -1;
  const arr = [];
  for (head; head; head = head.next) {
    arr.push(head.data);
  }

  return arr.lastIndexOf(value);
}
