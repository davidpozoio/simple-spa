export const NotFound = () => {
  const notFound = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "Page not found";

  notFound.appendChild(title);

  return notFound;
};
