import { Observable, Observer } from "../core/observable.js";

export const RouterObservable = new Observable();

export const Router = ({ routes = new Map() }) => {
  let url = window.location.pathname;
  const router = document.createElement("div");
  const getCurrentPage = (url) => routes.get(url) || routes.get("*");

  const observer = new Observer(() => {
    router.removeChild(getCurrentPage(url));

    url = window.location.pathname;

    router.appendChild(getCurrentPage(url));
  });

  RouterObservable.subscribe(observer);

  router.appendChild(getCurrentPage(url));

  return router;
};
