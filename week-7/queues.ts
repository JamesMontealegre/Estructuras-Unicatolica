class Queue {
  items: number[] = [];

  enqueue = (item: number) => {
    this.items.push(item);
  };

  dequeue = () => {
    this.items.shift();
  };
}
