class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)  # Agrega al final de la lista (como push)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)  # Quita el primer elemento (como shift)
        return None  # Retorna None si la cola está vacía

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)


# Uso de la clase Queue
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print("Antes del dequeue:", queue.items)

queue.dequeue()
print("Después del dequeue:", queue.items)
