// Definición del nodo de la lista enlazada
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Definición de la cola
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // Enqueue - Agregar elemento al final
  enqueue(value) {
    const node = new LinkedListNode(value);

    // ❶ Si la cola está vacía
    if (this.back === null) {
      this.front = node;
      this.back = node;
    } else {
      // ❷ Enlazar el nuevo nodo al final
      this.back.next = node;
      // ❸ Mover el back al nuevo nodo
      this.back = node;
    }
  }

  // Dequeue - Eliminar elemento del frente
  dequeue() {
    // ❶ Si la cola está vacía
    if (this.front === null) {
      return null;
    }

    // ❷ Obtener el valor del frente
    const value = this.front.value;
    // ❸ Mover el frente al siguiente nodo
    this.front = this.front.next;

    // Si después de remover está vacía, reiniciar back
    if (this.front === null) {
      this.back = null;
    }

    return value;
  }

  print() {
    let current = this.front;
    let output = "Queue: ";
    while (current) {
      output += current.value + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}
