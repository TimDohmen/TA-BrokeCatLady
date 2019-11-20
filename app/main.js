import CatsController from "./Controllers/CatsController.js";

class App {
  catsController = new CatsController();
}

window["app"] = new App();
