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
        count++;
    }

    return current;
}

// No es viable
let head = new LinkedListNode(10)
head.next = new LinkedListNode(20);
head.next.next = new LinkedListNode(30);

console.log(LinkedListLookUp(head, 1));


