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

  // Agregar al inicio (head)
  addFirst(value) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Agregar al final
  addLast(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  lookUp(position) {
    let current = this.head;
    let count = 0;

    while (count < position && current !== null) {
      current = current.next;
      count++;
    }

    return current ? current.value : null; // Retorna el valor o null si no existe
  }

  // Agregar en una posición específica
  addAt(value, position) {
    if (position < 0) {
      console.log("La posición debe ser un número positivo.");
      return;
    }

    const newNode = new LinkedListNode(value);

    if (position === 0) {
      this.addFirst(value);
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (current !== null && count < position) {
      previous = current;
      current = current.next;
      count++;
    }

    if (previous === null) {
      console.log("La lista está vacía o la posición no es válida.");
      return;
    }

    previous.next = newNode;
    newNode.next = current;
  }

  // Buscar un nodo en una posición específica
  lookUp(position) {
    let current = this.head;
    let count = 0;

    while (count < position && current !== null) {
      current = current.next;
      count++;
    }

    return current ? current.value : null; // Retorna el valor o null si no existe
  }

  // Imprimir la lista enlazada
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Uso de la lista enlazada
const linkedList = new LinkedList();
linkedList.addLast(20);
linkedList.addLast(30);
linkedList.addLast(40);

linkedList.addFirst(10); // Inserta 10 al inicio
linkedList.addAt(25, 2); // Inserta 25 en la posición 2

linkedList.print(); // Imprime: 10 -> 20 -> 25 -> 30 -> 40 -> null

console.log("Elemento en posición 2:", linkedList.lookUp(2)); // Retorna 25
console.log("Elemento en posición 5:", linkedList.lookUp(5)); // Retorna null (fuera de rango)
