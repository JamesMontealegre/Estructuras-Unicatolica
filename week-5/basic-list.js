class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function LinkedListLookUp(head, elementNumber) {
  let current = head;
  let count = 0;

  while (count < elementNumber && current !== null) {
    current = current.next;
    console.log(current);
    count++;
  }

  return current;
}

let head = new LinkedListNode("Hello World");
head.next = new LinkedListNode(20);
head.next.next = new LinkedListNode(30);
head.next.next.next = new LinkedListNode(40);

console.log(LinkedListLookUp(head, 0));
console.log(LinkedListLookUp(head, 2));
console.log(LinkedListLookUp(head, 5));
