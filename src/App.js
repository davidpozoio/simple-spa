import { Router } from "./components/Router.js";
import { Dashboard } from "./pages/Dashboard.js";
import { Login } from "./pages/Login.js";
import { NotFound } from "./pages/NotFound.js";

export const App = () => {
  const app = document.createElement("div");

  const routes = new Map();

  routes.set("/", Login());
  routes.set("/dashboard", Dashboard());
  routes.set("*", NotFound());

  app.appendChild(Router({ routes }));

  return app;
};
