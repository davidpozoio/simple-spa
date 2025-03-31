import { Observable, Observer } from "../core/observable.js";

export const RouterObservable = new Observable();

export const Router = ({ routes = new Map() }) => {
  let url = window.location.pathname;
  const router = document.createElement("div");

  const observer = new Observer(() => {
    router.removeChild(routes.get(url));

    url = window.location.pathname;

    router.appendChild(routes.get(url));
  });

  RouterObservable.subscribe(observer);

  router.appendChild(routes.get(url));

  return router;
};
