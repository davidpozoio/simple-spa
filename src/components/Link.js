import { RouterObservable } from "./Router.js";

export const Link = ({ href = "", textContent = "" }) => {
  const link = document.createElement("a");
  link.textContent = textContent;
  link.href = href;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState(null, "", href);

    RouterObservable.notify();
  });

  return link;
};
