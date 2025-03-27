class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    let value = null;
    if (this.head !== null) {
      value = this.head.value;
      this.head = this.head.next;
    }
    return value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Stack (top to bottom):", result);
  }
}
