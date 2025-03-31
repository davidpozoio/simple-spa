export const Counter = () => {
  let count = 0;
  const button = document.createElement("button");
  button.textContent = `click ${count}`;

  button.addEventListener("click", () => {
    count++;
    button.textContent = `click ${count}`;
  });

  return button;
};
