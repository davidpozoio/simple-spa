import { Router } from "./components/Router.js";
import { Dashboard } from "./pages/Dashboard.js";
import { Login } from "./pages/Login.js";

export const App = () => {
  const app = document.createElement("div");

  const routes = new Map();

  routes.set("/", Login());
  routes.set("/dashboard", Dashboard());

  app.appendChild(Router({ routes }));

  return app;
};
