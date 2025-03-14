class RouteNode {
  constructor(location) {
    this.location = location;
    this.next = null;
  }
}

class Route {
  constructor() {
    this.head = null;
  }

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

  navigateRoute() {
    let current = this.head;
    if (!current) {
      console.log("⚠️ No hay una ruta para navegar.");
      return;
    }
    console.log("🚗 Iniciando recorrido...");

    function showNextStep(node) {
      if (!node) {
        console.log("🏁 Fin del recorrido.");
        return;
      }

      setTimeout(() => {
        console.log(`🛑 Llegaste a: ${node.location}`);
        showNextStep(node.next); // Recursive call
      }, 2000);
    }

    showNextStep(current);
  }
}

const cityRoute = new Route();
cityRoute.addLocation("Avenida Central");
cityRoute.addLocation("Calle 5");
cityRoute.addLocation("Plaza Mayor");
cityRoute.addLocation("Avenida del Río");

cityRoute.showRoute();

console.log("\n🔄 Simulación del recorrido en la ruta:\n");

cityRoute.navigateRoute();
