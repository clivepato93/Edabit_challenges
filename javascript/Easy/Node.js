//Linked Lists
/*
Linked Lists - Push & BuildOneTwoThree

Write push() and buildOneTwoThree() functions to 

easily update and initialize linked lists. Try to use 

the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, 

where head is either a node object or null/None/nil.

Your push implementation should be able to create a new 

linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a 

linked list with three nodes: 1 -> 2 -> 3 -> null
*/
// https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript
function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // Go.
  const node = new Node(data);
  node.next = head;
  //   console.log(node)
  return node;
}

function buildOneTwoThree() {
  // Go.
  let node = null;
  for (let i = 3; i > 0; i--) {
    node = push(node, i);
  }
  return node;
}

function buildOneTwoThree() {
  // Go.

  return [3, 2, 1].reduce(push, null);
}

// console.log(
//   push(null, 1).data,
//   1,
//   "Should be able to create a new linked list with push()."
// );
// console.log(
//   push(null, 1).next,
//   null,
//   "Should be able to create a new linked list with push()."
// );
// console.log(
//   push(new Node(1), 2).data,
//   2,
//   "Should be able to prepend a node to an existing node."
// );
// console.log(
//   push(new Node(1), 2).next.data,
//   1,
//   "Should be able to prepend a node to an existing node."
// );

/*
DESCRIPTION:
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
I've decided to bundle these two functions within the same Kata

since they are both very similar.

The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() 

functions do not need to be redefined.

*/

function length(head) {
  let t = 0;
  for (let node = head; node; node = node.next) {
    t++;
  }

  return t;
}

function length(head) {
  let t = 0;
  for (let node = head; node; node = node.next) {
    t++;
  }

  return t;
}

function length(head, t = 0) {
  if (head == null) return t;
  t += 1;

  return length(head.next, t);
}

function length(head) {
  return head ? 1 + length(head.next) : 0;
}

// console.log(length(null), 0, "Length of null list should be zero.");
// console.log(
//   length(new Node(99)),
//   1,
//   "Length of single node list should be one."
// );
// console.log(
//   length(buildOneTwoThree()),
//   3,
//   "Length of the three node list should be three."
// );

function count(head, data) {
  // Your code goes here.
  let t = 0;
  for (let node = head; node; node = node.next) {
    if (data == head.data) t++;
  }

  return t;
}

function count(head, data, t = 0) {
  // Your code goes here.
  if (head == null) return t;
  if (data == head.data) t++;

  return count(head.next, data, t);
}

function count(head, data) {
  // Your code goes here.
  // debugger;
  if (head == null) return 0;
  return head.data == data
    ? 1 + count(head.next, data)
    : count(head.next, data);
}

function count(head, data) {
  // Your code goes here.
  // debugger;
  if (head == null) return 0;
  return head.data == data
    ? 1 + count(head.next, data)
    : count(head.next, data);
}
var list = buildOneTwoThree();

// console.log(count(list, 1), 1, "list should only contain one 1.");
// console.log(count(list, 2), 1, "list should only contain one 2.");
// console.log(count(list, 3), 1, "list should only contain one 3.");
// console.log(
//   count(list, 99),
//   0,
//   "list should return zero for integer not found in list."
// );
// console.log(count(null, 1), 0, "null list should always return count of zero.");

/*
DESCRIPTION:
Linked Lists - Get Nth
Implement a GetNth() function that takes a linked 

list and an integer index and returns the node stored 

at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2
The index should be in the range [0..length-1].

If it is not, or if the list is empty, GetNth() 

should throw/raise an exception (ArgumentException 
  
in C#, InvalidArgumentException in PHP, Exception in Java).


*/
// https://www.codewars.com/kata/linked-lists-get-nth-node
function getNth(list, index) {
  debugger;
  if (!list) throw Error("Invalid index");
  if (index == 0) return list;

  list = getNth(list.next, --index);
  return list;
}
var list = buildOneTwoThree();

// console.log(
//   getNth(list, 0).data,
//   1,
//   "First node should be located at index 0."
// );
// console.log(
//   getNth(list, 1).data,
//   2,
//   "Second node should be located at index 1."
// );
// console.log(
//   getNth(list, 2).data,
//   3,
//   "Third node should be located at index 2."
// );
// console.log("Invalid index value should throw error.", function () {
//   getNth(list, 3);
// });
// console.log("Invalid index value should throw error.", function () {
//   getNth(list, 100);
// });
// console.log("Null linked list should throw error.", function () {
//   getNth(null, 0);
// });

/*
Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP)

which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that

we implemented in the first kata listed below. Given a list,

an index 'n' in the range 0..length, and a data element, 

add a new node to the list so that it has the given index.

InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, 
  
InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP)

functions do not need to be redefined. The Node class is also 

preloaded for you in PHP.
*/

function Node(data, nxt = null) {
  this.data = data;
  this.next = nxt;
}

function insertNth(head, index, data) {
  // Your code goes here.
  // Return the head of the list.
  debugger;

  if (index == 0) return new Node(data, head);
  if (!head) throw Error("error");

  index--;

  head.next = insertNth(head.next, index, data);

  return head;
}

// console.log(
//   insertNth(buildOneTwoThree(), 1, 23).data,
//   1,
//   "value for node at index 0 should be 1."
// );
// console.log(
//   insertNth(buildOneTwoThree(), 1, 23).next.data,
//   23,
//   "value for node at index 1 should be 23"
// );
// console.log(
//   insertNth(buildOneTwoThree(), 1, 23).next.next.data,
//   2,
//   "value for node at index 2 should be 2."
// );
// console.log(
//   insertNth(buildOneTwoThree(), 1, 23).next.next.next.data,
//   3,
//   "value for node at index 3 should be 3."
// );
// console.log(
//   insertNth(buildOneTwoThree(), 1, 23).next.next.next.next,
//   null,
//   "value at index 4 should be null."
// );

// console.log(
//   insertNth(buildOneTwoThree(), 2, 23).data,
//   1,
//   "head should remain unchanged after inserting new node at index 2"
// );
// console.log(
//   insertNth(buildOneTwoThree(), 2, 23).next.data,
//   2,
//   "value at index 1 should remain unchanged after inserting new node at index 2"
// );
// console.log(
//   insertNth(buildOneTwoThree(), 2, 23).next.next.data,
//   23,
//   "value for node at index 2 should be 23."
// );
// console.log(
//   insertNth(buildOneTwoThree(), 2, 23).next.next.next.data,
//   3,
//   "value for node at index 3 should be 3."
// );
// console.log(
//   insertNth(buildOneTwoThree(), 2, 23).next.next.next.next,
//   null,
//   "value at index 4 should be null."
// );

/*
DESCRIPTION:
Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into
the correct location of a pre-sorted linked list which is 
sorted in ascending order. SortedInsert takes the head of 
a linked list and data used to create a node as arguments.
SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
The push() and buildOneTwoThree() functions do not need to be redefined.
*/

//www.codewars.com/kata/55cc33e97259667a08000044/train/javascript
function sortedInsert(head, data) {
  if (!head || head?.data >= data) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }
  let currentNode = head;
  let previousNode;
  while (data > currentNode?.data) {
    console.log(data, currentNode);
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  const node = new Node(data);
  previousNode.next = node;
  node.next = currentNode;
  return head;
}

function sortedInsert(head, data) {
  if (head?.data >= data) {
    return new Node(data, head);
  }
  if (!head) {
    return new Node(data);
  } else {
    head.next = sortedInsert(head.next, data);
  }

  return head;
}

function sortedInsert(head, data) {
  if (!head || head.data >= data) return new Node(data, head);
  else {
    head.next = sortedInsert(head?.next, data);
    return head;
  }
}

function sortedInsert(head, data) {
  // debugger;
  if (!head || data <= head.data) return new Node(data, head);

  return new Node(head.data, sortedInsert(head.next, data));
}

// console.log(
//   sortedInsert(null, 23).data,
//   23,
//   "should be able to insert a node on an empty/null list."
// );
// console.log(
//   sortedInsert(null, 23).next,
//   null,
//   "value at index 1 should be null."
// );

// console.log(
//   sortedInsert(buildOneTwoThree(), 0.5).data,
//   0.5,
//   "should be able to insert new node at head of list."
// );
// console.log(
//   sortedInsert(buildOneTwoThree(), 0.5).next.data,
//   1,
//   "value for node at index 1 should be 1."
// );
// console.log(
//   sortedInsert(buildOneTwoThree(), 0.5).next.next.data,
//   2,
//   "value for node at index 2 should be 2."
// );
// console.log(
//   sortedInsert(buildOneTwoThree(), 0.5).next.next.next.data,
//   3,
//   "value for node at index 3 should be 3."
// );
// console.log(
//   sortedInsert(buildOneTwoThree(), 0.5).next.next.next.next,
//   null,
//   "value at index 4 should be null."
// );

// console.log(
//   sortedInsert(buildOneTwoThree(), 2.5).next.data,
//   2,
//   "value at index 1 should remain unchanged after inserting new node at index 2"
// );

/*
DESCRIPTION:
Linked Lists - Insert Sort

Write an InsertSort() function which rearranges nodes in a 

linked list so they are sorted in increasing order. You can 

use the SortedInsert() function that you created in the "Linked 

Lists - Sorted Insert" kata below. The InsertSort() function 

takes the head of a linked list as an argument and must return

the head of the linked list.

var list = 4 -> 3 -> 1 -> 2 -> null
insertSort(list) === 1 -> 2 -> 3 -> 4 -> null

If the passed in head node is null or a single node,

return null or the single node, respectively. You can assume 

that the head node will always be either null, a single node,

or a linked list consisting of multiple nodes.
*/

// https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045/train/javascript

function insertSort(head) {
  debugger;
  // Your code goes here.
  // Remember to return the head of the list.
  if (!head) return head;
  let curr = head;
  let final = null;
  while (curr) {
    final = sortedInsert(final, curr.data);
    curr = curr.next;
  }
  return final;
}

function insertSort(head, nextList = null) {
  if (!head) return nextList;
  return insertSort(head.next, sortedInsert(nextList, head.data));
  // Your code goes here.
  // Remember to return the head of the list.
}

function insertSort(head, nextList = null) {
  if (!head) return nextList;
  return insertSort(head.next, sortedInsert(nextList, head.data));
}

function insertSort(head, sortedList = null) {
  return head
    ? insertSort(head.next, sortedInsert(sortedList, head.data))
    : sortedList;
}

// console.log(
//   insertSort(new Node(4, new Node(3, new Node(1, new Node(2))))),
//   1,
//   "Node at index 0 of InsertSort(1 -> 2 -> 3) should return 1."
// );

/*
Linked Lists - Append

Write an Append() function which appends one linked list to another.

The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. 

If one list is null/NULL/None/nil and the other is not, simply return the 

non-null/NULL/None/nil list.

The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) 

functions need not be redefined. The Node class is also predefined for you in PHP.
*/

// https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript

function append(listA, listB) {
  if (!listA && !listB) {
    return null;
  }
  if (!listA) {
    return listB;
  }

  if (!listB) {
    return listA;
  }
  let currentNode = listA;
  //   let pos = 0
  if (!currentNode.next) {
    currentNode.next = listB;
  } else {
    while (currentNode) {
      console.log(currentNode.next);
      if (currentNode.next === null) {
        currentNode = currentNode.next = listB;
        break;
      }
      currentNode = currentNode.next;
    }
  }
  return listA;
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  debugger;
  if (!listA) return listB;
  if (!listB) return listA;
  else {
    listA.next = append(listA.next, listB);
    return listA;
  }
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  if (!listA) return listB;
  listA.next = append(listA.next, listB);
  return listA;
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  if (!listA) return listB;
  return new Node(listA.data, append(listA.next, listB));
}

/*
Linked Lists - Remove Duplicates

Write a RemoveDuplicates() function which takes a list sorted 

in increasing order and deletes any duplicate nodes from the list. 

Ideally, the list should only be traversed once. The head of the 

resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. 

Recursive solutions may fail due to stack size limitations.

The push() and buildOneTwoThree() functions need not be redefined.
*/

// https://www.codewars.com/kata/55d9f257d60c5fd98d00001b/train/javascript
function buildList(arr) {
  return arr.reduceRight(push, null);
}

function removeDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

function removeDuplicates(head) {
  // debugger;
  if (!head) return head;
  head.next = removeDuplicates(head.next);
  if (head.next != null && head.data == head.next.data) {
    const curr = head.next;
    return curr;
    // removeDuplicates(head.next);
  }

  return head;
}

// console.log(
//   removeDuplicates(buildList([1, 2, 2])),
//   buildList([1, 2]),
//   "should remove the duplicate '2' entries"
// );
// console.log(
//   removeDuplicates(buildList([1, 1, 1, 1, 1])),
//   buildList([1]),
//   "should remove the duplicate '1' entries"
// );
// console.log(
//   removeDuplicates(buildList([1, 2, 3, 3, 4, 4, 5])),
//   buildList([1, 2, 3, 4, 5]),
//   "should remove the duplicate '3' and '4' entries"
// );
// console.log(
//   removeDuplicates(buildList([1, 1, 1, 1, 2, 2, 2, 2])),
//   buildList([1, 2]),
//   "should remove the duplicate '1' and '2' entries"
// );

/*
Linked Lists - Move Node

Write a MoveNode() function which takes the node from the front of the

source list and moves it to the front of the destintation list.

You should throw an error when the source list is empty. For simplicity,

we use a Context object to store and return the state of the two linked lists.

A Context object containing the two mutated lists should be returned

by moveNode.

MoveNode() is a handy utility function to have for later problems.
*/

//www.codewars.com/kata/55da347204760ba494000038/train/javascript

function Node(data, next = null) {
  (this.data = data), (this.next = next);
}
function Context(source, dest) {
  (this.source = source), (this.dest = dest);
}
function moveNode(source, dest) {
  if (!source) throw "Error";
  return new Context(source.next, new Node(source.data, dest));
}

// console.log(
//   moveNode(buildOneTwoThree(), null),
//   new Context(buildList([2, 3]), new Node(1))
// );

// console.log(
//   "error should be thrown when source list is empty",
//   moveNode(null, null)
// );

// console.log(
//   moveNode(buildOneTwoThree(), buildOneTwoThree()),
//   new Context(buildList([2, 3]), buildList([1, 1, 2, 3]))
// );
// console.log(
//   moveNode(buildOneTwoThreeFourFiveSix(), buildOneTwoThreeFourFiveSix()),
//   new Context(buildList([2, 3, 4, 5, 6]), buildList([1, 1, 2, 3, 4, 5, 6]))
// );
// console.log(
//   moveNode(buildList([1, 2, 3, 4, 5, 6, 7]), buildList([4, 5, 6, 7])),
//   new Context(buildList([2, 3, 4, 5, 6, 7]), buildList([1, 4, 5, 6, 7]))
// );

/*
Linked Lists - Alternating Split

Write an AlternatingSplit() function that takes one list 

and divides up its nodes to make two smaller lists. 

The sublists should be made from alternating elements in the original list.

So if the original list is a -> b -> a -> b -> a -> null then one sublist

should be a -> a -> a -> null and the other should be b -> b -> null.

var list = 1 -> 2 -> 3 -> 4 -> 5 -> null

alternatingSplit(list).first === 1 -> 3 -> 5 -> null

alternatingSplit(list).second === 2 -> 4 -> null

For simplicity, we use a Context object to store and return the 

state of the two linked lists. A Context object containing the two mutated 

lists should be returned by AlternatingSplit().

If the passed in head node is null/None/nil or a single node, throw an error.
*/
function Node(data, nxt = null) {
  this.data = data;
  this.next = nxt;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  // Your code goes here.

  // Remember to return the context.
  if (!head?.next) throw new Error("error");

  let firstNode = new Node(head.data);
  let secondNode = new Node(head.next.data);
  const context = new Context(firstNode, secondNode);
  debugger;
  for (let node = head.next.next; node; ) {
    firstNode.next = new Node(node.data);
    firstNode = firstNode.next;
    node = node.next;
    if (!node) break;
    secondNode.next = new Node(node.data);
    secondNode = secondNode.next;
    node = node.next;
  }

  return context;
}

function splitter(head) {
  // debugger;
  if (!head) return null;
  const node = new Node(head.data);
  node.next = head.next == null ? null : splitter(head.next.next);
  return node;
}

function alternatingSplit(head) {
  // Your code goes here.
  // console.log(head);
  // Remember to return the context.
  if (!head?.next) throw new Error("error");
  return new Context(splitter(head), splitter(head.next));
}

// console.log(alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])));

// console.log(
//   "splitting a null list should throw an error.",
//   alternatingSplit(null)
// );
// console.log(
//   "splitting a single node list should throw an error.",
//   alternatingSplit(new Node(23))
// );
// console.log(
//   alternatingSplit(buildOneTwo()).first.data,
//   1,
//   "First index of first linked list should have value of 1."
// );
// console.log(
//   alternatingSplit(buildOneTwo()).first.next,
//   null,
//   "Second index of first linked list should be null."
// );
// console.log(
//   alternatingSplit(buildOneTwo()).second.data,
//   2,
//   "First index of second linked list should have value of 2."
// );
// console.log(
//   alternatingSplit(buildOneTwo()).second.next,
//   null,
//   "Second index of second linked list should be null."
// );

// console.log(
//   alternatingSplit(buildOneTwoThree()).first.data,
//   1,
//   "First index of first linked list should have value of 1."
// );
// console.log(
//   alternatingSplit(buildOneTwoThree()).first.next.data,
//   3,
//   "Second index of first linked list should have value 3."
// );
// console.log(
//   alternatingSplit(buildOneTwoThree()).first.next.next,
//   null,
//   "Third index of first linked list should be null."
// );
// console.log(
//   alternatingSplit(buildOneTwoThree()).second.data,
//   2,
//   "First index of second linked list should have value of 2."
// );
// console.log(
//   alternatingSplit(buildOneTwoThree()).second.next,
//   null,
//   "Second index of second linked list should be null."
// );

// console.log(
//   alternatingSplit(buildOneTwoThreeFourFiveSix()).first,
//   buildList([1, 3, 5]),
//   "First list of alternatingSplit(1 -> 2 -> 3 -> ... 6 -> null) should be 1 -> 3 -> 5 -> null"
// );
// console.log(
//   alternatingSplit(buildOneTwoThreeFourFiveSix()).second,
//   buildList([2, 4, 6]),
//   "Second list of alternatingSplit(1 -> 2 -> 3 -> ... 6 -> null) should be 2 -> 4 -> 6 -> null"
// );
// console.log(
//   alternatingSplit(buildOneTwoThreeFourFiveSix()).first.next.next.next,
//   null,
//   "Fourth index of first linked list should be null."
// );
// console.log(
//   alternatingSplit(buildOneTwoThreeFourFiveSix()).second.next.next.next,
//   null,
//   "Fourth index of second linked list should be null."
// );

// console.log(
//   alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).first,
//   buildList([1, 3, 5, 7, 9, 11]),
//   "First list of alternatingSplit(1 -> 2 -> 3 -> ... 11 -> null) should be 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> null"
// );
// console.log(
//   alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).second,
//   buildList([2, 4, 6, 8, 10]),
//   "Second list of alternatingSplit(1 -> 2 -> 3 -> ... 11 -> null) should be 2 -> 4 -> 6 -> 8 -> 10 -> null"
// );
// console.log(
//   alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).first.next
//     .next.next.next.next.next,
//   null,
//   "Seventh index of first linked list should be null."
// );
// console.log(
//   alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).second.next
//     .next.next.next.next,
//   null,
//   "Sixth index of second linked list should be null."
// );

// console.log(
//   alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).first,
//   buildList([5, 1, 3, 3, 8, 4]),
//   "First list of alternatingSplit(5 -> 6 -> 1 -> 2 -> 3 -> 3 -> 3 -> 4 -> 8 -> 5 -> 4 -> 1 -> null) should be 5 -> 1 -> 3 -> 3 -> 8 -> 4 -> null"
// );
// console.log(
//   alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).second,
//   buildList([6, 2, 3, 4, 5, 1]),
//   "Second list of alternatingSplit(5 -> 6 -> 1 -> 2 -> 3 -> 3 -> 3 -> 4 -> 8 -> 5 -> 4 -> 1 -> null) should be 6 -> 2 -> 3 -> 4 -> 5 -> -> 1 -> null"
// );
// console.log(
//   alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).first.next
//     .next.next.next.next.next,
//   null,
//   "Seventh index of first linked list should be null."
// );
// console.log(
//   alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).second.next
//     .next.next.next.next.next,
//   null,
//   "Seventh index of second linked list should be null."
// );

/*
Find the K-th last element of a singly linked list

Write a function that given the head of singly linked list,

and an index (0 based) counted from the end of the list, 

returns the element corresponding to that index.

The function must return a falsy value for invalid input values,

like an out of range index.

So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with 

index 2 should return the Node (predefined object for list nodes) 

corresponding to 42.

Other examples:

getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2
*/

//www.codewars.com/kata/5810d8ce2956d78698000032/train/javascript
function getKthLastElement(head, k) {
  const reverseList = reverse(head, null);
  if (!k) return reverseList;
  for (let node = reverseList; node; node = node.next) {
    if (!k) return node;
    k--;
  }

  return false;
}

// const list = new Node(1, new Node(2, new Node(3)));

// console.log(getKthLastElement(list, 0).data, 3);
// console.log(getKthLastElement(list, 1).data, 2);
// console.log(getKthLastElement(list, 2).data, 1);

function Node(data, nxt = null) {
  this.data = data === undefined ? null : data;
  this.next = nxt;
}

/*
Linked Lists - Shuffle Merge

Write a ShuffleMerge() function that takes two lists and merges their nodes together

to make one list, taking nodes alternately between the two lists. So ShuffleMerge() 

with 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null 

should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null. 

If either list runs out, all the nodes should be taken from the other list. 

ShuffleMerge() should return the new list. The solution depends on being able 

to move nodes to the end of a list.

var first = 3 -> 2 -> 8 -> null
var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null
If one of the argument lists is null, the returned list should be the other 

linked list (even if it is also null). No errors need to be thrown in ShuffleMerge().

*/

function shuffleMerge(first, second) {
  // Your code goes here.
  if (!first && !second) return first;
  // console.log(first.data, second.data);
  console.log(first, second);
  let node;
  if (first) {
    //     debugger;
    node = new Node(first.data);
  }

  if (!first && second) {
    //     debugger;
    node = new Node(second.data);
    return node;
  }
  first = first.next;

  const finalNode = node;
  let index = 1;
  while (first || second) {
    //     debugger;
    if (index % 2 == 0 && first) {
      //       console.log("even");
      let newNode = new Node(first.data);
      first = first.next;
      node.next = newNode;
      node = newNode;
    } else if (index % 2 && second) {
      let newNode = new Node(second.data);
      second = second.next;
      node.next = newNode;

      node = newNode;
    } else if (first && !second) {
      let newNode = new Node(first.data);
      first = first.next;
      node.next = newNode;
      node = newNode;
    } else if (!first && second) {
      let newNode = new Node(second.data);
      second = second.next;
      node.next = newNode;
      node = newNode;
    }
    index++;
  }
  return finalNode;
}

function shuffleMerge(first, second, turn = true) {
  // Your code goes here.
  if (!first) return second;
  if (!second) return first;
  const node = new Node(turn ? first.data : second.data);
  node.next = turn
    ? shuffleMerge(first.next, second, !turn)
    : shuffleMerge(first, second.next, !turn);
  return node;
}

// console.log(
//   shuffleMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), null),
//   buildList([1, 3, 5, 7, 9, 11, 13, 15]),
//   "result should be 1 -> 3 -> 5 ... 15 -> null."
// );
// console.log(
//   shuffleMerge(
//     buildList([1, 3, 5, 7, 9, 11, 13, 15]),
//     buildList([2, 4, 6, 8, 10, 12, 14, 16])
//   ),
//   buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
//   "result should be 1 -> 2 -> ... 16 -> null."
// );
// console.log(
//   shuffleMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), new Node(88)),
//   buildList([1, 88, 3, 5, 7, 9, 11, 13, 15]),
//   "result should be 1 -> 88 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13 -> 15 -> null."
// );

/*
Linked Lists - Front Back Split

Write a FrontBackSplit() function that takes one list and splits it into two sublists

— one for the front half, and one for the back half. If the number of elements is odd,

the extra element should go in the front list. For example, FrontBackSplit() 

on the list 2 -> 3 -> 5 -> 7 -> 11 -> null 

should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null. 

Getting this right for all the cases is harder than it looks. 

You will probably need special case code to deal with lists of length < 2 cases.
*/

function Node(data = null, nxt = null) {
  this.data = data;
  this.next = nxt;
}

// const node = null;
// let iterator = source;
// for (let index = 0; index < Math.floor(mid / 2); index++) {}

function frontBackSplit(source, front, back) {
  // Your code goes here.
  if (!front || !back || !source?.next) throw new Error("source is small");
  let fP = null;
  let mid = 0;
  let frontNode;
  for (let pointer = source; pointer; pointer = pointer.next) {
    fP = !fP ? pointer.next : fP.next.next;
    debugger;

    if (fP.next === null) {
      back.data = pointer.next.data;
      back.next = pointer.next.next;
      pointer.next = null;
      break;
    }
    mid++;
    // console.log("pointer", pointer, "fp", fP, mid);
  }
  for (let i = 0; i <= mid; i++) {
    debugger;

    let node = new Node(source.data, source.next);
    frontNode = node;
    node = node.next;
  }
  front.data = frontNode.data;
  front.next = frontNode.next;
  console.log(frontNode);
}

let source = buildOneTwoThree(),
  front = new Node(),
  back = new Node();
frontBackSplit(source, front, back);

// let source = buildList([3, 4, 6, 1, 2, 4, 2, 0, 3, 2, 6, 6, 5, 1, 2, 9]),
//   front = new Node(),
//   back = new Node();
// frontBackSplit(source, front, back);
// console.log(front, back);

// console.log(
//   "throw an error if source, front, and back lists are null.",

//   frontBackSplit(null, null, null)
// );

// console.log(
//   "error should be thrown if source has an empty node.",
//   frontBackSplit(new Node(), new Node(), new Node())
// );
// console.log(
//   "error should be thrown if source has only one node.",
//   frontBackSplit(new Node(23), new Node(), new Node())
// );

// let source = buildOneTwoThree(),
//   front = new Node(),
//   back = new Node();
// frontBackSplit(source, front, back);
// console.log(front, back);

/*


Linked Lists - Recursive Reverse

Write a Recursive Reverse() function that recursively reverses a linked list.

You may want to use a nested function for the recursive calls.

var list = 2 -> 1 -> 3 -> 6 -> 5 -> null


reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null

*/
// https://www.codewars.com/kata/55e725b930957a038a000042/train/javascript

function Node(data, nxt = null) {
  this.data = data === undefined ? null : data;
  this.next = nxt;
}

function reverse(head, reverseList = null) {
  // Your code goes here.
  return head
    ? reverse(head.next, new Node(head.data, reverseList))
    : reverseList;
}

// var list = buildList([1, 3, 5, 7, 9, 11, 13, 15]);
// console.log(
//   reverse(list),
//   buildList([15, 13, 11, 9, 7, 5, 3, 1]),
//   "result should be 15 -> 13 -> 11 ... -> 1 -> null."
// );
// list = buildList([15, 13, 11, 9, 7, 5, 3, 1]);
// console.log(
//   reverse(list),
//   buildList([1, 3, 5, 7, 9, 11, 13, 15]),
//   "result should be 1 -> 3 -> 5 ... 15 -> null."
// );
// list = buildList([9, 1, 7, 3, 5, 15, 13, 11]);
// console.log(
//   reverse(list),
//   buildList([11, 13, 15, 5, 3, 7, 1, 9]),
//   "result should be 11 -> 13 -> 15 -> 5 -> 3 -> 7 -> 1 -> 9 -> null."
// );
// list = buildList([1, 1, 1, 1, 1, 1, 1, 1]);
// console.log(
//   reverse(list),
//   buildList([1, 1, 1, 1, 1, 1, 1, 1]),
//   "result should be 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> null."
// );
