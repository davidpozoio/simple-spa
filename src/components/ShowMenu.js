export const ShowMenu = () => {
  let showMenu = false;

  const menu = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "Menu";
  const button = document.createElement("button");
  button.innerHTML = "Show menu";
  const subMenu = document.createElement("div");
  subMenu.textContent = "Submenu";

  button.addEventListener("click", () => {
    showMenu = !showMenu;

    if (showMenu) {
      menu.appendChild(subMenu);
    } else {
      menu.removeChild(subMenu);
    }
  });

  menu.appendChild(title);
  menu.appendChild(button);

  return menu;
};
