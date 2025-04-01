import { Counter } from "../components/Counter.js";
import { Link } from "../components/Link.js";

export const Login = () => {
  const login = document.createElement("div");
  login.className = "login";
  login.textContent = "Login page";

  login.appendChild(Counter());
  login.appendChild(
    Link({ href: "/dashboard", textContent: "go to dashboard" })
  );

  return login;
};
