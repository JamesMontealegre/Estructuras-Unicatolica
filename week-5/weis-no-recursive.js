// Definimos un nodo para representar una intersección en la ruta
class RouteNode {
  constructor(location) {
    this.location = location; // Nombre de la intersección
    this.next = null; // Apunta a la siguiente intersección
  }
}

// Definimos la lista enlazada para la ruta
class Route {
  constructor() {
    this.head = null;
  }

  // Agregar una nueva intersección al final de la ruta
  addLocation(location) {
    const newNode = new RouteNode(location);
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

  // Mostrar la ruta completa
  showRoute() {
    let current = this.head;
    if (!current) {
      console.log("⚠️ No hay una ruta definida.");
      return;
    }
    console.log("🛣️ Ruta definida:");
    while (current !== null) {
      console.log(`➡️ ${current.location}`);
      current = current.next;
    }
  }

  // Simular el recorrido de la ruta paso a paso
  navigateRoute() {
    let current = this.head;
    if (!current) {
      console.log("⚠️ No hay una ruta para navegar.");
      return;
    }
    console.log("🚗 Iniciando recorrido...");

    // Usamos setInterval para mostrar cada punto de la ruta cada 2 segundos
    const interval = setInterval(() => {
      if (!current) {
        console.log("🏁 Fin del recorrido.");
        clearInterval(interval); // Detenemos el intervalo cuando terminamos
        return;
      }

      console.log(`🛑 Llegaste a: ${current.location}`);
      current = current.next; // Avanzamos al siguiente nodo
    }, 2000);
  }
}

// Uso del sistema de rutas
const cityRoute = new Route();
cityRoute.addLocation("Avenida Central");
cityRoute.addLocation("Calle 5");
cityRoute.addLocation("Plaza Mayor");
cityRoute.addLocation("Avenida del Río");

// Mostrar la ruta completa
cityRoute.showRoute();

console.log("\n🔄 Calculando mejor ruta... \n");

// Simular el recorrido paso a paso
cityRoute.navigateRoute();
