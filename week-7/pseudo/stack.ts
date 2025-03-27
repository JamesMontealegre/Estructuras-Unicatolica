class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack_<T> {
  head: LinkedListNode<T> | null = null;

  push(value: T): void {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }

  pop(): T | null {
    let value: T | null = null;
    if (this.head !== null) {
      value = this.head.value;
      this.head = this.head.next;
    }
    return value;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  print(): void {
    let current = this.head;
    const result: T[] = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Stack (top to bottom):", result);
  }
}
