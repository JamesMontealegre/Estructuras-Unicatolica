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

    const interval = setInterval(() => {
      if (!current) {
        console.log("🏁 Fin del recorrido.");
        clearInterval(interval);
        return;
      }

      console.log(`🛑 Llegaste a: ${current.location}`);
      current = current.next;
    }, 2000);
  }
}

const cityRoute = new Route();
cityRoute.addLocation("Avenida Central");
cityRoute.addLocation("Calle 5");
cityRoute.addLocation("Plaza Mayor");
cityRoute.addLocation("Avenida del Río");

cityRoute.showRoute();

console.log("\n🔄 Calculando mejor ruta... \n");

cityRoute.navigateRoute();
