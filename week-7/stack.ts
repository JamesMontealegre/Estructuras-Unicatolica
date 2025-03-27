class Stack {
  items: number[] = [];
}

const stack = new Stack();
stack.items.push(2);
stack.items.push(3);
stack.items.push(4);
stack.items.push(5);
stack.items.push(6);

// stack.items.pop();

// stack.items[0] = 1

stack.items.unshift(1);

console.log(stack.items);
