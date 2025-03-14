class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let element = this.head;
    while (element.next !== null) {
      element = element.next;
    }

    element.next = newNode;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "->/");
  }
}


const list = new LinkedList();

list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);

list.print();


