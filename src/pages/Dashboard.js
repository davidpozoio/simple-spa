import { Link } from "../components/Link.js";
import { ShowMenu } from "../components/ShowMenu.js";

export const Dashboard = () => {
  const dashboard = document.createElement("div");
  dashboard.className = "dashboard";
  dashboard.textContent = "Dashboard page";

  dashboard.appendChild(ShowMenu());
  dashboard.appendChild(Link({ href: "/", textContent: "go to login" }));

  return dashboard;
};
